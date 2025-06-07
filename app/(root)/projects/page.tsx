export const revalidate = 60;

import BackBtn from '@/components/BackBtn';
import ContactSection from '@/components/ContactSection';
import Project from '@/components/Project'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { FETCH_PROJRCTS } from '@/lib/quaries';
import { sanityFetch } from '@/sanity/lib/live';
import React from 'react'

const Page = async () => {
    const { data: projects } = await sanityFetch({ query: FETCH_PROJRCTS })
    return (
        <div className="page">
            <ThemeSwitcher />
            <BackBtn />
            <h1 className="section-title my-5 text-3xl">Projects</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                {projects && projects.length > 0 ? (
                    projects.map((project: any) => <Project key={project._id} project={project} />)
                ) : (
                    <p className="text-light-secondary dark:text-dark-secondary">No articles available.</p>
                )}
            </div>

            <ContactSection />
        </div>
    );
};

export default Page;
