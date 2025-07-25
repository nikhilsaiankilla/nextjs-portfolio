import React from 'react';
import Education from './Education';

/**
 * Displays the education background section with improved descriptions.
 * Includes strong action verbs and maintains accessibility best practices.
 */
const EducationSection = () => {
    return (
        <section
            id="education"
            className="my-10"
            aria-labelledby="education-heading"
        >
            <h2
                id="education-heading"
                className="section-title my-4"
                role="heading"
                aria-level={2}
            >
                Education
            </h2>

            <div
                className="w-full flex flex-col gap-4"
                role="list"
                aria-label="Education background"
            >
                <Education
                    location="Hyderabad, India"
                    year="OCT 2021 - JUNE 2025"
                    university="Sri Indu College Of Engineering And Technology"
                    course="Bachelor of Technology in Data Science"
                    description="Developed a strong foundation in computer science, mastered core data science concepts, and explored computer networks and machine learning applications."
                />
                <Education
                    location="Hyderabad, India"
                    year="2019 - 2021"
                    university="Sri Gayathri Junior College"
                    course="Intermediate (M.P.C)"
                    description="Strengthened analytical and problem-solving skills through in-depth study of mathematics, physics, and logical reasoning."
                />
            </div>
        </section>
    );
};

export default EducationSection;
