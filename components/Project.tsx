import { urlFor } from "@/sanity/lib/image";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectProps {
    project: {
        _id: string;
        title: string;
        tagline: string;
        image?: { _type: 'image'; asset: { _ref: string } };
    };
}

/**
 * Project card component used in grids.
 * Displays image, title, tagline and links to the project details page.
 */
const Project: React.FC<ProjectProps> = ({ project }) => {
    if (!project) return null;

    const { title, _id, image, tagline } = project;

    // Generate image URL or fallback
    const imageUrl = image
        ? urlFor(image.asset._ref).url()
        : "https://via.placeholder.com/500";

    return (
        <Link
            href={`/project/${_id}`}
            // Gives screen readers a descriptive label
            aria-label={`View details of project titled ${title}`}
            className="w-full border-light-secondary dark:border-dark-secondary border-2 rounded-lg overflow-hidden group cursor-pointer"
        >
            {/* Image section with aspect ratio control */}
            <div className="w-full aspect-square overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={`Thumbnail image for project ${title}`} // SEO + screen reader benefit
                    width={1000}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-150 ease-in-out"
                    priority={false}
                />
            </div>

            {/* Title + Tagline + Arrow */}
            <div className="w-full flex items-center justify-between p-4">
                <div>
                    <h2
                        className="text-md font-bold text-light-accent dark:text-dark-accent"
                        // Helps search engines understand this is a heading
                        aria-level={2}
                        role="heading"
                    >
                        {title}
                    </h2>
                    <p className="text-description md:text-sm mt-1">
                        {tagline}
                    </p>
                </div>

                {/* Decorative arrow icon for visual cue */}
                <ArrowRight
                    size={18}
                    className="text-light-accent group-hover:-rotate-45 transition-all duration-200 ease-in-out"
                    aria-hidden="true"
                />
            </div>
        </Link>
    );
};

export default Project;
