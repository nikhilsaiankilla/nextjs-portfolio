import { FETCH_PROJECTS_LIMITED } from '@/lib/quaries';
import { sanityFetch } from '@/sanity/lib/live';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import NextPageBtn from '@/components/NextPageBtn';
import Project from '@/components/Project';

import type { Metadata } from "next";

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
        url: "https://nikhilsaiportfolio.vercel.app/projects",
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
        canonical: "https://nikhilsaiportfolio.vercel.app/projects",
    },
};

export const revalidate = 60;

const ProjectSection = async () => {
    // Fetch data on every request (SSR)
    const { data: projects } = await sanityFetch({ query: FETCH_PROJECTS_LIMITED });

    return (
        <section id="projects" className="page space-y-10">
            <div className="mt-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-dark-accent">Projects</h1>
                <p className="text-muted-foreground text-sm">
                    Explore some of the projects I’ve built using modern full stack technologies like Next.js,
                    React, Node.js, and more.
                </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                {projects && projects.length > 0 ? (
                    projects.map((project: any) => <Project key={project._id} project={project} />)
                ) : (
                    <p className="text-light-secondary dark:text-dark-secondary">No Projects available.</p>
                )}
            </div>
        </section>
    );
};

export default ProjectSection;