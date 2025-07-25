import React from 'react';
import Project from './Project';
import NextPageBtn from './NextPageBtn';
import { ArrowRight } from 'lucide-react';

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
            <div className="flex items-center justify-between">
                <h2
                    id="projects-heading"
                    className="section-title my-5"
                >
                    {/* SEO-friendly section heading */}
                    Some of my projects
                </h2>
                <NextPageBtn
                    title="View more projects"
                    destination="/projects"
                    icon={
                        <ArrowRight
                            size={14}
                            className="group-hover:-rotate-45 transition-all duration-200 ease-in-out"
                            aria-hidden="true"
                        />
                    }
                />
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
