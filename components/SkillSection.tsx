import React from 'react';
import Skill from './Skill';

/**
 * Displays a responsive section showing all technical skills.
 * Fetches data from Sanity on the server side with revalidation every 60 seconds.
 */

type Props = {
    skills: Array<{
        _id: string;
        name: string;
        iconUrl: string;
    }>;
}

const SkillSection = async ({ skills }: Props) => {

    return (
        <section
            id="stack"
            className="w-full my-10"
            aria-labelledby="stack-heading"
        >
            {/* Section title */}
            <h2
                id="stack-heading"
                className="section-title my-4"
                role="heading"
                aria-level={2}
            >
                Stack
            </h2>

            {/* Skills grid */}
            <div
                className="w-full grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 gap-2 sm:gap-4 md:gap-6"
                role="list"
                aria-label="Technologies and tools I use"
            >
                {skills && skills.length > 0 ? (
                    skills.map((skill: any) => (
                        <Skill key={skill._id} skill={skill} />
                    ))
                ) : (
                    <p className="text-light-secondary dark:text-dark-secondary">
                        No skills available.
                    </p>
                )}
            </div>
        </section>
    );
};

export default SkillSection;
