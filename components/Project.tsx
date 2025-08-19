import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NextPageBtn from "./NextPageBtn";
import { ArrowRight } from "lucide-react";
import { PortableText, PortableTextComponents } from "next-sanity";

interface ProjectProps {
    project: {
        _id: string;
        title: string;
        tagline: string;
        demo_url: string;
        source_url: string;
        image?: { _type: "image"; asset: { _ref: string } };
    };
    index: number; // 👈 add index prop
}

const Project: React.FC<ProjectProps> = ({ project, index }) => {
    if (!project) return null;

    const { title, _id, image, tagline, demo_url, source_url } = project;

    const imageUrl = image
        ? urlFor(image.asset._ref).url()
        : "https://via.placeholder.com/500";

    const isEven = index % 2 === 0;

    return (
        <div
            className={`w-full relative border border-white/20 dark:border-black/20 shadow-xl rounded-2xl group cursor-pointer flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Content */}
            <div className="flex-1 relative p-8 flex flex-col justify-end">
                {/* Big Index in Background */}
                <h1
                    className={`absolute -top-6 md:-top-10 z-0 ${!isEven ? "-left-4 md:-left-8" : "-right-4 md:-right-8"
                        } text-[8rem] md:text-[15rem] font-extrabold text-dark-primary/10 dark:text-light-primary/10 leading-none select-none pointer-events-none`}
                >
                    0{index + 1}
                </h1>

                {/* Glassmorphic Content Box */}
                <div className="relative z-10 backdrop-blur-md bg-white/10 dark:bg-black/20 rounded-xl p-4 shadow-lg">
                    <h2
                        className="text-2xl font-bold text-light-accent dark:text-dark-accent tracking-tight"
                        role="heading"
                        aria-level={2}
                    >
                        {title}
                    </h2>
                    <p className="text-description text-sm mt-2 line-clamp-4">
                        {tagline}
                    </p>

                    <div className="flex items-center gap-3 flex-wrap mt-4">
                        <Link
                            href={demo_url}
                            role="link"
                            // Improves accessibility for screen readers
                            aria-label={`Navigate to ${title}`}
                            className="relative flex items-center gap-2 py-2 text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-all duration-150 ease-in-out text-sm group"
                        >
                            View Project

                            <span
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-500 opacity-50 group-hover:opacity-100
        before:absolute before:bottom-0 before:left-0 before:h-full before:w-0
        before:bg-light-accent dark:before:bg-dark-accent
        before:transition-all before:duration-300 before:ease-in-out
        group-hover:before:w-full"
                                aria-hidden="true"
                            />

                            <ArrowRight
                                size={14}
                                className="group-hover:-rotate-45 transition-all duration-300 ease-in-out"
                            />
                        </Link>
                        <Link
                            href={source_url}
                            role="link"
                            // Improves accessibility for screen readers
                            aria-label={`Navigate to ${title}`}
                            className="relative flex items-center gap-2 py-2 text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-all duration-150 ease-in-out text-sm group"
                        >
                            View Source Code

                            <span
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-500 opacity-50 group-hover:opacity-100
        before:absolute before:bottom-0 before:left-0 before:h-full before:w-0
        before:bg-light-accent dark:before:bg-dark-accent
        before:transition-all before:duration-300 before:ease-in-out
        group-hover:before:w-full"
                                aria-hidden="true"
                            />
                            <ArrowRight
                                size={14}
                                className="group-hover:-rotate-45 transition-all duration-300 ease-in-out"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Image */}
            <Link
                href={`/project/${_id}`}
                aria-label={`View details of project titled ${title}`}
                className="md:w-1/2 w-full relative rounded-2xl overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={`Thumbnail image for project ${title}`}
                    width={1000}
                    height={600}
                    className="w-full h-full rounded-2xl object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    priority={false}
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
            </Link>
        </div >
    );
};

export default Project;
