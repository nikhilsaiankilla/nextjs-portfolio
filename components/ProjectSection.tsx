export const dynamic = "force-dynamic";

import { FETCH_PROJECTS_LIMITED } from '@/lib/quaries'
import { sanityFetch } from '@/sanity/lib/live'
import React from 'react'
import Project from './Project'
import NextPageBtn from './NextPageBtn';
import { ArrowRight } from 'lucide-react';

const ProjectSection = async () => {
    const { data: projects } = await sanityFetch({ query: FETCH_PROJECTS_LIMITED })
    return (
        <section id="projects" className="w-full my-10">
            <div className="flex items-center justify-between">
                <h2 className="section-title my-5">some of my projects</h2>
                <NextPageBtn
                    title="view more projects"
                    destination="/projects"
                    icon=
                    {
                        <ArrowRight size={14}
                            className="group-hover:-rotate-45 transition-all duration-200 ease-in-out"
                        />}
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
    )
}

export default ProjectSection