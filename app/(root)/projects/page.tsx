import React from "react";
import Project from "@/components/Project";
import type { Metadata } from "next";
import { adminDatabase } from "@/lib/firebaseAdmin";
import { markdownToHtmlText } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore Nikhil Sai Ankilla's full stack development projects built with Next.js, React, TypeScript, Node.js, and more.",
    keywords: [
        "Nikhil Projects",
        "Nikhil Sai Ankilla Projects",
        "Full Stack Projects",
        "Developer Portfolio Projects",
        "Next.js Projects",
        "React Projects",
        "TypeScript Projects",
        "Web Development Portfolio",
        "Open Source Projects",
        "Frontend Projects",
        "Backend Projects",
        "Software Engineer Projects",
        "MERN Stack Projects",
        "JavaScript Projects",
        "Node.js Projects",
        "Project Showcase",
        "Coding Portfolio",
        "Developer Work",
    ],
    openGraph: {
        title: "Projects | Nikhil Sai Ankilla",
        description:
            "Browse the projects built by Nikhil Sai Ankilla, showcasing expertise in full stack development, UI/UX, APIs, and scalable architecture.",
        url: "https://nikhilsaiankilla.blog/projects",
        siteName: "Nikhil Sai Ankilla Portfolio",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Nikhil Sai Ankilla - Full Stack Developer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Projects | Nikhil Sai Ankilla",
        description:
            "Check out full stack web projects created by Nikhil using Next.js, React, TypeScript, Supabase, and more.",
        creator: "@NikhilSaiAnkil1",
        images: ["/opengraph-image.png"],
    },
    alternates: {
        canonical: "https://nikhilsaiankilla.blog/projects",
    },
};

export const revalidate = 60;

async function getProjects() {
    try {
        const res = await adminDatabase.collection("projects").orderBy("createdAt", "desc").get();

        if (res.empty) {
            return [];
        }

        const projects: Project[] = await Promise.all(
            res.docs.map(async (doc: any) => {
                const data = doc.data();

                const descriptionHtml = data?.description ? await markdownToHtmlText(data.description) : "";

                return {
                    id: doc.id,
                    title: data.title,
                    image: data.image,
                    tagline: data.tagline,
                    problem: data.problem,
                    description: descriptionHtml,
                    githubUrl: data.githubUrl,
                    demoUrl: data.demoUrl,
                    skills: Array.isArray(data.skills) ? data.skills : [],
                }
            })
        );

        return projects;
    } catch (error) {
        console.log("Error fetching projects:", error);
        return [];
    }
}

const ProjectSection = async () => {
    const projects = await getProjects();

    return (
        <section id="projects" className="w-full px-5 md:px-12 lg:px-24 py-16 bg-[#F0F1F3] dark:bg-black min-h-screen">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-300 dark:border-gray-800 pb-8">
                    <div className="space-y-4 max-w-2xl">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            All Projects
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            A collection of applications, experiments, and system designs I've engineered.
                        </p>
                    </div>
                    <div className="text-right hidden md:block">
                        <span className="text-4xl font-mono font-bold text-gray-300 dark:text-gray-700">
                            {projects?.length || 0}
                        </span>
                        <span className="block text-sm text-gray-500 uppercase tracking-widest mt-1">Total Works</span>
                    </div>
                </div>

                {/* The Grid - Dynamic Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {projects && projects.length > 0 ? (
                        projects.map((project, index) => (
                            <Project key={project.id} project={project} index={index} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center text-muted-foreground">
                            No projects found.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
