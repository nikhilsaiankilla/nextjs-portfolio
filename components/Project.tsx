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

const Project: React.FC<ProjectProps> = ({ project }) => {

    if (!project) return null;

    const { title, _id, image, tagline } = project;

    const imageUrl = image ? urlFor(image.asset._ref).url() : "https://via.placeholder.com/500";

    return (
        <Link
            href={`/project/${_id}`}
            className="w-full border-light-secondary dark:border-dark-secondary border-2 rounded-lg overflow-hidden group cursor-pointer"
        >
            <div className="w-full aspect-square overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={1000}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-150 ease-in-out"
                />
            </div>
            <div className="w-full flex items-center justify-between p-4">
                <div>
                    <h2 className="text-md font-bold text-light-accent dark:text-dark-accent">{title}</h2>
                    <p className="text-description md:text-sm mt-1">{tagline}</p>
                </div>
                <ArrowRight
                    size={18}
                    className="text-light-secondary dark:text-dark-secondary group-hover:-rotate-45 transition-all duration-200 ease-in-out"
                />
            </div>
        </Link>
    );
};

export default Project;
