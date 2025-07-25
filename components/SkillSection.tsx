import React from 'react';
import Skill from './Skill';

type Props = {
    skills: Array<{
        _id: string;
        name: string;
        iconUrl: string;
    }>;
};

// Define the skills to prioritize (case-insensitive)
const IMPORTANT_SKILLS = ['TypeScript', 'Next.js', 'JavaScript', 'React', 'Tailwind CSS'];

const SkillSection = async ({ skills }: Props) => {
    const importantSkills = skills.filter((skill) =>
        IMPORTANT_SKILLS.some(
            (important) => skill.name.toLowerCase() === important.toLowerCase()
        )
    );

    const otherSkills = skills.filter(
        (skill) =>
            !IMPORTANT_SKILLS.some(
                (important) => skill.name.toLowerCase() === important.toLowerCase()
            )
    );

    const sortedSkills = [...importantSkills, ...otherSkills];

    return (
        <section
            id="stack"
            className="w-full my-10"
            aria-labelledby="stack-heading"
        >
            <h2
                id="stack-heading"
                className="section-title my-4"
                role="heading"
                aria-level={2}
            >
                Stack
            </h2>

            <div
                className="w-full grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 gap-2 sm:gap-4 md:gap-6"
                role="list"
                aria-label="Technologies and tools I use"
            >
                {sortedSkills.length > 0 ? (
                    sortedSkills.map((skill) => (
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
