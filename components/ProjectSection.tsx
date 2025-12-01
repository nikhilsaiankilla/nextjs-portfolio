import { Project as ProjectType } from "@/types";
import Project from "./Project";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = { projects: ProjectType[] };

const ProjectSection = ({ projects }: Props) => {
    return (
        <section id="projects" className="w-full py-20">
            <div className="flex items-end justify-between mb-10">
                <h2 className="text-3xl md:text-5xl font-bold">Selected Works</h2>
                <Link
                    href="/projects"
                    className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                    View Archive <ArrowRight size={16} />
                </Link>
            </div>

            {/* 1. grid-cols-1 md:grid-cols-3:  3 columns on desktop.
               2. grid-flow-dense: Helps fill gaps if a big square leaves a hole.
            */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 grid-flow-dense">
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <Project
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))
                ) : (
                    <p>No projects available.</p>
                )}
            </div>

            <div className="mt-8 md:hidden flex justify-center">
                <Link href="/projects" className="flex items-center gap-2">
                    View Archive <ArrowRight size={16} />
                </Link>
            </div>
        </section>
    );
};

export default ProjectSection;