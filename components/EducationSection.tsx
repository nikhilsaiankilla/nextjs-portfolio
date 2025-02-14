import React from 'react'
import Education from './Education'

const EducationSection = () => {
    return (
        <>
            <h2 className="section-title my-4">Education</h2>
            <div className="w-full flex flex-col gap-4">
                <Education />
                <Education />
            </div>
        </>
    )
}

export default EducationSection