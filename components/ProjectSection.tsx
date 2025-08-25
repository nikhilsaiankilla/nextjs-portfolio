import React from 'react';
import Project from './Project';
import NextPageBtn from './NextPageBtn';
import { ArrowRight, Code } from 'lucide-react';
import Link from 'next/link';

type Props = {
    projects: Array<{
        _id: string;
        title: string;
        description: string;
        imageUrl: string;
        projectUrl: string;
        githubUrl?: string;
    }>;
}

const ProjectSection = ({ projects }: Props) => {

    return (
        <section
            id="projects"
            className="w-full my-10"
            aria-labelledby="projects-heading"
            role="region"
        >
            <div className="flex items-center justify-between mb-10">
                <h2 id="projects-heading" className="text-3xl font-bold flex items-center gap-3">
                    <Code size={24} />
                    Projects
                </h2>
                <Link
                    href="/projects"
                    className="flex items-center gap-2 text-sm md:text-base font-semibold text-black transition-transform duration-200 ease-in-out hover:translate-x-1 group"
                >
                    View more projects
                    <ArrowRight
                        size={16}
                        className="transition-transform duration-200 ease-in-out group-hover:-rotate-45"
                        aria-hidden="true"
                    />
                </Link>
            </div>

            <div className="w-full grid grid-cols-1 gap-10 mt-20">
                {projects && projects.length > 0 ? (
                    projects.map((project: any, index: number) => <Project key={project._id} project={project} index={index} />)
                ) : (
                    <p className="text-light-secondary dark:text-dark-secondary">No Projects available.</p>
                )}
            </div>
        </section>
    );
};

export default ProjectSection;
