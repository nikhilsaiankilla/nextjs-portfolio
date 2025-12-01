"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/types";

interface ProjectProps {
    project: Project;
    index: number;
}

const Project: React.FC<ProjectProps> = ({ project, index }) => {
    if (!project) return null;

    const { id, title, tagline, image, demoUrl, githubUrl } = project;

    // LAYOUT LOGIC:
    // Make the 1st (index 0) and 7th (index 6) item a "Big Square"
    // To stay square while spanning 2 columns, it must also span 2 rows.
    const isLarge = index === 0 || index === 6;

    return (
        <div
            className={`
                group relative overflow-hidden rounded-3xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-gray-900 
                aspect-square 
                ${isLarge ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"}
            `}
        >
            {/* Background Image */}
            <Image
                src={image || "https://via.placeholder.com/800"}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
            />

            {/* Dark Overlay (visible on hover or always slightly visible for text readability) */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

            {/* Content Container */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">

                {/* Top Right Actions */}
                <div className="flex justify-end gap-2 translate-y-[-10px] group-hover:translate-y-0 transition-transform duration-300">
                    {githubUrl && (
                        <Link
                            href={githubUrl}
                            target="_blank"
                            className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Github size={20} />
                        </Link>
                    )}
                    <Link
                        href={demoUrl || `/projects/${id}`}
                        className="p-2 bg-white text-black rounded-full hover:scale-110 transition-transform"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ArrowUpRight size={20} />
                    </Link>
                </div>

                {/* Bottom Text Info */}
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="flex items-center justify-center w-10 h-10 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full shadow-xl border border-white/20 text-green-600 dark:text-green-400 font-mono text-sm font-bold mb-4">
                        0{index + 1}
                    </span>
                    <h3 className={`${isLarge ? "text-3xl" : "text-xl"} font-bold leading-tight mb-2 capitalize`}>{title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">
                        {tagline}
                    </p>
                </div>
            </div>

            {/* Entire Card Clickable Area */}
            <Link href={`/projects/${id}`} className="absolute inset-0 z-0" aria-label={`View ${title}`} />
        </div>
    );
};

export default Project;

