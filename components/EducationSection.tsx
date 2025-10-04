import React from 'react';
import { GraduationCap } from 'lucide-react';

// This is the component for a single education entry
const EducationEntry = ({ location, year, university, course, descriptionPoints }: { location: string, year: string, university: string, course: string, descriptionPoints: string[] }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold text-black">{university}</h3>
                    <p className="text-sm font-medium text-gray-700">{course}</p>
                </div>
                <div className="text-sm text-gray-500 md:text-right mt-2 md:mt-0">
                    <p>{year}</p>
                    <p>{location}</p>
                </div>
            </div>

            <ul className="list-disc list-outside pl-5 space-y-2 text-sm md:text-lg font-light text-gray-800 mt-2">
                {descriptionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
};

// This is the main section component that renders the entries
const EducationSection = () => {
    return (
        <section
            id="education"
            className="w-full my-16"
            aria-labelledby="education-heading"
        >
            <h2 id="education-heading" className="text-3xl font-bold flex items-center gap-3 mb-10">
                <GraduationCap size={24} />
                Education
            </h2>

            <div className="w-full grid grid-cols-1 gap-10 md:gap-16">
                <EducationEntry
                    location="Hyderabad, India"
                    year="2021 - 2025"
                    university="Sri Indu College Of Engineering And Technology"
                    course="Bachelor of Technology in Data Science"
                    descriptionPoints={[
                        "Mastered core Computer Science and Data Science fundamentals, including the Software Development Life Cycle (SDLC), DBMS, and machine learning principles.",
                        "Developed practical skills in key areas like machine learning applications and computer network management.",
                        "Enhanced problem-solving abilities by completing over 70 Data Structures and Algorithms (DSA) questions.",
                        "Effectively managed teams for college-driven coding events, developing strong leadership and collaboration skills."
                    ]}
                />
                <EducationEntry
                    location="Hyderabad, India"
                    year="2019 - 2021"
                    university="Sri Gayathri Junior College"
                    course="Intermediate (M.P.C)"
                    descriptionPoints={[
                        "Strengthened analytical and problem-solving skills through in-depth study of mathematics, physics, and logical reasoning."
                    ]}
                />
            </div>
        </section>
    );
};

export default EducationSection;