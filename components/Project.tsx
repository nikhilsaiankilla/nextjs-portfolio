import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectProps {
    project: Project;
    index: number;
}

const Project: React.FC<ProjectProps> = ({ project, index }) => {
    if (!project) return null;

    const { id, title, description, tagline, image, demoUrl, githubUrl, problem } = project;
    const isEven = index % 2 === 0;

    return (
        <div
            className={`w-full relative border border-white/20 dark:border-black/20 shadow-xl rounded-2xl group cursor-pointer flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Content */}
            <div className="flex-1 relative p-4 md:p-8 flex flex-col justify-end">
                {/* Big Index in Background */}
                <h1
                    className={`absolute -top-6 md:-top-10 z-0 ${!isEven ? "-left-4 md:-left-8" : "-right-4 md:-right-8"
                        } text-[8rem] md:text-[15rem] font-extrabold text-dark-primary/10 dark:text-light-primary/10 leading-none select-none pointer-events-none`}
                >
                    0{index + 1}
                </h1>

                {/* Content Box */}
                <div className="relative z-10 rounded-xl p-4 md:p-6">
                    {/* Title */}
                    <h2
                        className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight uppercase"
                        role="heading"
                        aria-level={2}
                    >
                        {title}
                    </h2>

                    {/* Tagline */}
                    {tagline && (
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">
                            {tagline}
                        </p>
                    )}

                    {/* Problem */}
                    {problem && (
                        <p className="text-sm italic text-gray-500 dark:text-gray-500 mt-3">
                            {problem}
                        </p>
                    )}

                    {/* Description */}
                    {/* {description && (
                        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mt-3 line-clamp-4 leading-relaxed">
                            {description}
                        </p>
                    )} */}

                    {/* Links */}
                    <div className="flex items-center gap-4 flex-wrap mt-5">
                        {/* Project Link */}
                        <Link
                            href={demoUrl || "#"}
                            aria-label={`Visit live project: ${title}`}
                            className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-150"
                        >
                            View Project
                            <ArrowRight
                                size={14}
                                className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out"
                            />
                        </Link>

                        {/* GitHub Link */}
                        {githubUrl && (
                            <Link
                                href={githubUrl}
                                aria-label={`View source code for ${title}`}
                                className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-150"
                            >
                                View Source Code
                                <ArrowRight
                                    size={14}
                                    className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out"
                                />
                            </Link>
                        )}

                        {id && (
                            <Link
                                href={`/projects/${id}`}
                                aria-label={`View source code for ${title}`}
                                className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-150"
                            >
                                More Details
                                <ArrowRight
                                    size={14}
                                    className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out"
                                />
                            </Link>
                        )}
                    </div>
                </div>

            </div>

            {/* Image */}
            <Link
                href={`/projects/${id}`}
                aria-label={`View details of project titled ${title}`}
                className="md:w-1/2 w-full relative rounded-2xl overflow-hidden"
            >
                <Image
                    src={image || "https://via.placeholder.com/500"}
                    alt={`Thumbnail for ${title}`}
                    width={1000}
                    height={600}
                    className="w-full h-full aspect-square rounded-2xl object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
            </Link>
        </div>
    );
};

export default Project;
