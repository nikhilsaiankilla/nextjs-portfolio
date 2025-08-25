import React from 'react';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

type Props = {
    skills: Array<{
        _id: string;
        name: string;
        iconUrl: string;
    }>;
};

// A component for a single skill card
const SkillCard = ({ name, iconUrl }: { name: string; iconUrl: string }) => {
    return (
        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#E0E1E3] transition-all duration-300 ease-in-out hover:bg-[#D0D1D3] hover:scale-105">
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                <Image
                    src={iconUrl}
                    alt={name}
                    width={64}
                    height={64}
                    className="object-contain"
                />
            </div>
            <span className="text-sm font-medium text-center text-black">
                {name}
            </span>
        </div>
    );
};

const SkillSection = ({ skills }: Props) => {
    // Normalizing names for a cleaner display
    const normalizedSkills = skills.map((skill) => {
        let name = skill.name;
        if (name.toLowerCase() === "typescript") {
            name = "TypeScript";
        }
        if (name.toLowerCase() === "javascript") {
            name = "JavaScript";
        }
        if (name.toLowerCase() === "tailwind css") {
            name = "Tailwind CSS";
        }
        if (name.toLowerCase() === "next js") {
            name = "Next.js";
        }
        if (name.toLowerCase() === "react js") {
            name = "React.js";
        }
        return { ...skill, name };
    });

    console.log();
    
    return (
        <section
            id="stack"
            className="w-full my-16"
            aria-labelledby="stack-heading"
        >
            <h2 id="stack-heading" className="text-3xl font-bold flex items-center gap-3 mb-10">
                <Sparkles size={24} />
                Tech Stack
            </h2>

            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6">
                {normalizedSkills.length > 0 ? (
                    normalizedSkills.map((skill) => (
                        <SkillCard key={skill._id} name={skill.name} iconUrl={skill.iconUrl} />
                    ))
                ) : (
                    <p className="text-black col-span-full">
                        No skills available at the moment.
                    </p>
                )}
            </div>
        </section>
    );
};

export default SkillSection;