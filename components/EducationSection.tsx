import React from 'react'
import Education from './Education'

const EducationSection = () => {
    return (
        <>
            <h2 className="section-title my-4">Education</h2>
            <div className="w-full flex flex-col gap-4">
                <Education location='Hyderabad, India' year="2021 - present" university="Sri Indu College Of Engineering And Technology" course="Bachelor of Technology in Data Science" description="gained knowledged in Computerscience, Datascience, and Computer networks etc"/>
                <Education location='Hyderabad, India' year="2019 - 2021" university="Sri Gayathri Junior College" course="Intermediate (M.P.C)" description="gained knowledge in statistics, physics and languages"/>
            </div>
        </>
    )
}

export default EducationSection