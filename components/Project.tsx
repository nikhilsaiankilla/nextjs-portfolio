import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Project = () => {
    return (
        <Link
            href={`/project/2`}
            className="w-full border-light-secondary dark:border-dark-secondary border-2 rounded-lg overflow-hidden group cursor-pointer">
            <div className="w-full aspect-square overflow-hidden">
                <img
                    src="https://avatars.githubusercontent.com/u/109269825?v=4"
                    alt="user image"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-150 ease-in-out"
                />
            </div>
            <div className="w-full flex items-center justify-between p-4">
                <div>
                    <h2 className="text-md font-bold text-light-accent dark:text-dark-accent">Project Title</h2>
                    <p className="text-description md:text-sm mt-1">Something about the project</p>
                </div>
                <ArrowRight size={18} className="text-light-secondary dark:text-dark-secondary group-hover:-rotate-45 transition-all duration-200 ease-in-out" />
            </div>
        </Link>
    )
}

export default Project