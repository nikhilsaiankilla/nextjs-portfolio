import Image from "next/image";

// Single Skill Card
export const SkillCard = ({ name, iconUrl }: { name: string; iconUrl?: string }) => {
    return (
        <div
            className="flex items-center space-x-2 p-2 border-2 border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
            {iconUrl && (
                <div className="flex items-center justify-center">
                    <Image src={iconUrl} alt={name} width={28} height={28} className="object-contain" />
                </div>
            )}
            <span className="text-sm font-medium text-center break-words text-black">{name}</span>
        </div>
    );
};