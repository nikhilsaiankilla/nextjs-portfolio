export const dynamic = "force-dynamic";

import { FETCH_ALL_SKILLS } from '@/lib/quaries'
import { sanityFetch } from '@/sanity/lib/live'
import React from 'react'
import Skill from './Skill'

const SkillSection = async () => {
    const { data: skills } = await sanityFetch({ query: FETCH_ALL_SKILLS })
    return (
        <section id="stack" className="w-full  my-10">
            <h2 className="section-title my-4">Stack</h2>
            <div className="w-full grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 gap-2 sm:gap-4 md:gap-6">

                {skills && skills.length > 0 ? (
                    skills.map((skill: any) => <Skill key={skill._id} skill={skill} />)
                ) : (
                    <p className="text-light-secondary dark:text-dark-secondary">No skills available.</p>
                )}

            </div>
        </section>
    )
}

export default SkillSection