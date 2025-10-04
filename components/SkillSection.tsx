import React from "react";
import type { Skill } from "@/types";
import { SkillCard } from "./SkillCard";

type Props = { skills: Skill[] };

// Skill Section grouped by category
const SkillSection = ({ skills }: Props) => {
    // Group skills by category
    const skillsByCategory: Record<string, Skill[]> = {};
    skills.forEach((skill) => {
        const category = skill.category || "Other";
        if (!skillsByCategory[category]) skillsByCategory[category] = [];
        skillsByCategory[category].push(skill);
    });

    return (
        <section className="w-full my-16">
            <h1 className="text-3xl font-bold mb-8">Tech Stack</h1>

            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div key={category} className="mb-8">
                    <h2 className="text-lg font-semibold mb-4">{category}</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                        {categorySkills.map((skill) => (
                            <SkillCard key={skill.id} name={skill.name} iconUrl={skill.image} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default SkillSection;
