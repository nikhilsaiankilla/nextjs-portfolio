import BackBtn from '@/components/BackBtn'
import Button from '@/components/Button'
import ContactSection from '@/components/ContactSection'
import ProjectSection from '@/components/ProjectSection'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { FETCH_PROJECT_WITH_ID } from '@/lib/quaries'
import { sanityFetch } from '@/sanity/lib/live'
import { ArrowRight, Component } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

import { PortableText, PortableTextComponents } from "next-sanity";
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const project = await sanityFetch({
        query: FETCH_PROJECT_WITH_ID,
        params: { id },
    });

    if (!project?.data) return {};

    const { title, tagline, image } = project.data;

    return {
        title: `${title} | Project Showcase | Nikhil Sai Ankilla`,
        description: tagline || "Explore this featured project from the portfolio.",
        keywords: [
            title,
            "Nikhil Sai Ankilla",
            "Full Stack Projects",
            "React Developer Portfolio",
            "Next.js Projects",
            "Developer Portfolio",
            "Open Source Project",
            "Software Engineering Projects",
            "Tech Showcase",
            "Web Development Portfolio",
        ],
        metadataBase: new URL("https://nikhilsaiportfolio.vercel.app"),
        openGraph: {
            title: `${title} | Project Showcase | Nikhil Sai Ankilla`,
            description: tagline || "Explore this featured project from the portfolio.",
            url: `https://nikhilsaiportfolio.vercel.app/project/${id}`,
            siteName: "Nikhil Sai Ankilla Portfolio",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | Project Showcase | Nikhil Sai Ankilla`,
            description: tagline || "Explore this featured project from the portfolio.",
            creator: "@NikhilSaiAnkil1",
            images: [image],
        },
        authors: [
            {
                name: "Nikhil Sai Ankilla",
                url: "https://nikhilsaiportfolio.vercel.app",
            },
        ],
        creator: "Nikhil Sai Ankilla",
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
            },
        },
        alternates: {
            canonical: `https://nikhilsaiportfolio.vercel.app/project/${id}`,
        },
    };
}

const customComponents: PortableTextComponents = {
    marks: {
        code: ({ children }) => (
            <code className="bg-gray-900 text-[#E1E1E1] px-2 py-1 rounded-md text-sm font-mono w-full block">
                {children}
            </code>
        ),
    },
    block: {
        normal: ({ children }) => <p className="text-sm">{children}</p>,
        h1: ({ children }) => <h1 className="text-xl font-bold text-light-accent dark:text-dark-accent">{children}</h1>,
        h2: ({ children }) => <h2 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h2>,
        h3: ({ children }) => <h3 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h3>,
        h4: ({ children }) => <h4 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h4>,
        h5: ({ children }) => <h5 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h5>,
        h6: ({ children }) => <h6 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h6>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-500 pl-4 italic text-light-accent dark:text-dark-accent">{children}</blockquote>
        ),
        code: ({ children }) => (
            <pre className="w-full max-w-full bg-[#1E1E1E] text-[#E1E1E1] p-4 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre">
                <code className="block w-full">{children}</code>
            </pre>
        ),
    },
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    if (!id) {
        return notFound();
    }

    const project: any = await sanityFetch({
        query: FETCH_PROJECT_WITH_ID,
        params: { id },
    });

    if (!project) {
        return notFound();
    }

    return (
        <div className="page" aria-label={`Project page for ${project.data.title}`}>
            <ThemeSwitcher />
            <BackBtn />

            <article className="w-full" aria-labelledby="project-title">
                <h1 id="project-title" className="text-lg font-bold leading-normal">{project.data.title}</h1>
                <p className="text-description text-sm mt-2" aria-label="Project tagline">
                    {project.data.tagline}
                </p>

                <Image
                    src={project.data.image}
                    alt={`Screenshot of ${project.data.title}`}
                    width={1000}
                    height={500}
                    className="w-full object-cover rounded-md overflow-hidden aspect-square my-5"
                />

                <div className="flex gap-5" role="group" aria-label="Project links">
                    <Button
                        title="View Demo"
                        destination={project.data.demo_url}
                        icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />}
                        aria-label="View project demo"
                    />
                    <Button
                        title="View Code"
                        destination={project.data.source_url}
                        icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />}
                        aria-label="View source code on GitHub"
                    />
                </div>

                <h2 className="section-title mt-4 mb-3">Tech stack</h2>
                <div className="w-full flex items-center justify-start flex-wrap gap-4" aria-label="Technology stack used">
                    {project.data.tech_stack.map((tech: any) => (
                        <span
                            key={tech?._id}
                            className="border-[2px] border-light-secondary dark:border-emerald-400 rounded-sm px-4 py-1 text-sm flex items-center gap-2"
                            aria-label={`Tech used: ${tech?.name}`}
                        >
                            <Component size={13} className="text-emerald-400" /> {tech?.name}
                        </span>
                    ))}
                </div>

                <section className="text-description text-sm mt-4 text-left flex flex-col gap-5" aria-label="Project description">
                    <PortableText value={project?.data.description} components={customComponents} />
                </section>

            </article>

            <ProjectSection />
            <ContactSection />
        </div>
    );
}

export default page