import type { Project as ProjectType } from "@/types";
import Project from "./Project";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = { projects: ProjectType[] };

const ProjectSection = ({ projects }: Props) => {
    return (
        <section id="projects" aria-labelledby="projects-heading" className="w-full">
            <h2 id="contact-heading" className="text-3xl font-bold flex items-center gap-3 mb-10">
                Projects
            </h2>

            <div className="grid gap-5 md:gap-10">
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <Project key={project.id} project={project} index={index} />
                    ))
                ) : (
                    <p>No projects available.</p>
                )}

                <div className="mt-10 relative">
                    {
                        projects.length > 0 && < Link
                            href={`/projects`}
                            aria-label={`take to more projects page`}
                            className="flex absolute right-0 items-center gap-2 text-lg text-gray-800 dark:text-gray-200 hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-150"
                        >
                            More Projects
                            <ArrowRight
                                size={14}
                                className="group-hover:-rotate-45 transition-transform duration-300 ease-in-out"
                            />
                        </Link>
                    }
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;