import { MapPin } from 'lucide-react'
import React from 'react'

const Education = () => {
    return (
        <div className="w-full border-l-[1px] border-[#363636] p-4 gap-2">
            <div className="w-full flex items-center justify-between">
                <h4 className="flex gap-2 items-center text-description text-sm"><MapPin size={14} /> Hyderabd, India</h4>
                <span className="text-description text-sm">2021 - 2025</span>
            </div>
            <h3 className="text-lg mt-2 md:mt-0">Bachelor of Technology in Data Science</h3>
            <h5 className="text-description">Sri Indu College Of Engineering And Technology</h5>

            <p className='text-description text-sm mt-3'>Learned the concepts Computer networks, System Design etc</p>
        </div>
    )
}

export default Education