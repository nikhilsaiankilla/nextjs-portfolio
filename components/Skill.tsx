import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image'
import React from 'react'

interface SkillProps {
    skill: {
        _id: string;
        name: string;
        icon?: { _type: 'image'; asset: { _ref: string } };
    };
}

const Skill: React.FC<SkillProps> = ({ skill }) => {

    if (!skill) return null;

    const { name, icon } = skill;

    const imageUrl = icon ? urlFor(icon.asset._ref).url() : "https://via.placeholder.com/500";

    return (
        <div className="w-full">
            <div className="w-full aspect-square rounded-lg overflow-hidden">
                <Image
                    src={imageUrl}
                    alt="skill"
                    width={1000}
                    height={500}
                    className="w-full h-full object-contain"
                />
            </div>
            <p className="text-light-accent dark:text-dark-accent text-center text-sm mt-1">{name}</p>
        </div>
    )
}

export default Skill