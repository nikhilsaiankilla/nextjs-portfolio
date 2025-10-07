import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import ProjectSection from "@/components/ProjectSection";
import { SkillCard } from "@/components/SkillCard";
import { adminDatabase } from "@/lib/firebaseAdmin";
import { markdownToHtml } from "@/lib/utils";
import { Project } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    if (!id) return notFound();

    const projectRef = await adminDatabase.collection("projects").doc(id);
    const projectSnap = await projectRef.get();
    const project = projectSnap.exists ? (projectSnap.data() as Project) : null;
    if (!project) return notFound();

    const descriptionHtml = project?.description ? await markdownToHtml(project.description) : "";
    const projects = await getProjects();

    // Fetch skill details
    const skills = project?.skills ? await getSkills(project.skills) : [];

    return (
        <div className="w-full px-5 md:px-24 lg:px-52 bg-[#F0F1F3]" aria-label={`Project page for ${project.title}`}>
            <article className="w-full" aria-labelledby="project-title">

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-center">
                    {/* Project Image */}
                    <Image
                        src={project.image || "https://via.placeholder.com/500x500"}
                        alt={`Screenshot of ${project.title}`}
                        width={1000}
                        height={1000}
                        className="w-full aspect-square object-cover rounded-lg shadow-md"
                    />

                    {/* Project Details */}
                    <div className="flex flex-col gap-3 p-2">
                        {/* Title */}
                        <h1
                            id="project-title"
                            className="text-3xl md:text-4xl uppercase font-extrabold leading-tight text-gray-900 dark:text-white"
                        >
                            {project.title}
                        </h1>

                        {/* Tagline */}
                        {project.tagline && (
                            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                {project.tagline}
                            </h2>
                        )}

                        {/* Problem */}
                        {project.problem && (
                            <p className="text-sm italic text-gray-500 dark:text-gray-500">
                                {project.problem}
                            </p>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <Button
                                title="View Demo"
                                destination={project.demoUrl}
                                icon={
                                    <ArrowRight
                                        size={16}
                                        className="group-hover:-rotate-45 transition-all duration-200 ease-in-out"
                                    />
                                }
                                aria-label="View project demo"
                            />
                            {project.githubUrl && (
                                <Button
                                    title="View Code"
                                    destination={project.githubUrl}
                                    icon={
                                        <ArrowRight
                                            size={16}
                                            className="group-hover:-rotate-45 transition-all duration-200 ease-in-out"
                                        />
                                    }
                                    aria-label="View source code on GitHub"
                                />
                            )}
                        </div>

                        {/* Skills / Tech Stack */}
                        {skills.length > 0 && (
                            <section className="">
                                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                                    Tech Stack
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                    {skills.map((skill: any) => (
                                        <SkillCard
                                            key={skill.id}
                                            name={skill.name}
                                            iconUrl={skill.image}
                                        />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>

                <section
                    className="my-8 prose prose-lg prose-neutral dark:prose-invert max-w-none
             prose-headings:scroll-mt-24
             prose-headings:mt-10 prose-headings:mb-4
             prose-p:leading-relaxed prose-p:my-6 prose-p:text-gray-800 dark:prose-p:text-gray-200
             prose-a:text-blue-600 hover:prose-a:text-blue-700
             prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:border-gray-300 dark:prose-blockquote:text-gray-400
             prose-img:rounded-xl prose-img:shadow-lg
             prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-pink-600
             space-y-8"
                >
                    <article className="space-y-6" dangerouslySetInnerHTML={{ __html: descriptionHtml || "" }} />
                </section>
            </article>

            <ProjectSection projects={projects} />
            <ContactSection />
        </div>
    );
};

export default Page

async function getSkills(skillIds: string[]) {
    if (!skillIds.length) return [];

    const skillDocs = await Promise.all(
        skillIds.map((id) => adminDatabase.collection("skills").doc(id).get())
    );

    const skills = skillDocs
        .filter((doc) => doc.exists)
        .map((doc) => ({ id: doc.id, ...doc.data() } as { id: string; name: string; iconUrl?: string }));

    return skills;
}

async function getProjects() {
    try {
        const res = await adminDatabase.collection("projects").orderBy("createdAt", "desc").limit(3).get();

        if (res.empty) {
            return [];
        }

        const projects: Project[] = res.docs.map((doc: any) => {
            const data = doc.data();

            return {
                id: doc.id,
                title: data.title,
                image: data.image,
                tagline: data.tagline,
                problem: data.problem,
                description: data.description,
                githubUrl: data.githubUrl,
                demoUrl: data.demoUrl,
                skills: Array.isArray(data.skills) ? data.skills : [],
            }
        })

        return projects;
    } catch (error) {
        console.log("Error fetching projects:", error);
        return [];
    }
}