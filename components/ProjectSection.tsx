import { FETCH_PROJECTS_LIMITED } from '@/lib/quaries'
import { sanityFetch } from '@/sanity/lib/live'
import React from 'react'
import Project from './Project'

const ProjectSection = async () => {
    const { data: projects } = await sanityFetch({ query: FETCH_PROJECTS_LIMITED })
    return (
        <>{projects && projects.length > 0 ? (
            projects.map((project: any) => <Project key={project._id} project={project} />)
        ) : (
            <p className="text-light-secondary dark:text-dark-secondary">No Projects available.</p>
        )}</>
    )
}

export default ProjectSection