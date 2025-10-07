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
    const projects = await getProjects(); // default: 6 projects

    return (
        <section id="projects" className="w-full px-5 md:px-24 lg:px-52 pt-5 pb-10 bg-[#F0F1F3] space-y-10">
            <div className="mt-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    Projects
                </h1>
                <p className="text-muted-foreground text-sm">
                    Explore some of the projects I’ve built using modern full stack
                    technologies like Next.js, React, Node.js, and more.
                </p>
            </div>
            <div className="w-full grid grid-cols-1 gap-14 mt-20">
                {projects && projects.length > 0 ? (
                    projects.map((project, index) => (
                        <Project key={project.id} project={project} index={index} />
                    ))
                ) : (
                    <p className="text-light-secondary dark:text-dark-secondary">
                        No Projects available.
                    </p>
                )}
            </div>
        </section>
    );
};

export default ProjectSection;
