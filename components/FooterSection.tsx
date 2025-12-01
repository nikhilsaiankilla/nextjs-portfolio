import { getResume } from '@/lib/actions'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FooterSection = async () => {
    const resumeRef = await getResume();
    
    return (
        <div className='w-full text-center text-black py-10 space-y-5'>
            <p className='text-sm'>nikhilsaiankilla@gmail.com</p>
            <div className='text-sm flex items-center justify-center gap-5'>
                <Link href='https://github.com/nikhilsaiankilla' target='_blank' className='hover:text-red-600 transition-all duration-200 ease-linear'><Github size={18} /></Link>
                <Link href='https://www.linkedin.com/in/nikhilsaiankilla/' target='_blank' className='hover:text-red-600 transition-all duration-200 ease-linear'><Linkedin size={18} /></Link>
                <Link href='https://x.com/nikhilbuildss' target='_blank' className='hover:text-red-600 transition-all duration-200 ease-linear'><Twitter size={18} /></Link>
                <Link href='mail:nikhilsaiankilla@gmail.com' target='_blank' className='hover:text-red-600 transition-all duration-200 ease-linear'><Mail size={18} /></Link>
                {
                    resumeRef.resumeUrl && <Link href={resumeRef.resumeUrl} target='_blank' className='hover:text-red-600 transition-all duration-200 ease-linear'>Resume</Link>
                }
            </div>
        </div>
    )
}

export default FooterSection