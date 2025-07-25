import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface certificatesProps {
    title: string,
    company: string,
    link: string
}
const Certificate: React.FC<certificatesProps> = ({ title, company, link }) => {
    return (
        <li className="w-full flex items-center justify-between">
            <div>
                <h3 className="dark:text-light-primary text-dark-primary text-lg">{title}</h3>
                <p className="text-description text-sm">{company}</p>
            </div>
            <Link href={link} target='_blank' className="relative flex items-center gap-2 py-2 text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-all duration-150 ease-in-out text-sm group">
                View
                <ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-500 opacity-50 group-hover:opacity-100 before:absolute before:bottom-0 before:left-0 before:h-full before:w-0 before:bg-light-accent before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full" />
            </Link>
        </li>
    )
}

export default Certificate