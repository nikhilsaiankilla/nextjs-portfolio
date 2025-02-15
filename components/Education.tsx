import { MapPin } from 'lucide-react'
import React from 'react'

interface educationProps {
    location: string,
    year: string,
    course: string,
    university: string,
    description: string,
}
const Education: React.FC<educationProps> = ({ location, year, course, university, description }) => {
    return (
        <div className="w-full border-l-[1px] border-[#363636] p-4 gap-2">
            <div className="w-full flex items-center justify-between">
                <h4 className="flex gap-2 items-center text-description text-sm"><MapPin size={14} /> {location}</h4>
                <span className="text-description text-sm">{year}</span>
            </div>
            <h3 className="text-lg mt-2 md:mt-0">{course}</h3>
            <h5 className="text-description">{university}</h5>

            <p className='text-description text-sm mt-3'>{description}</p>
        </div>
    )
}

export default Education