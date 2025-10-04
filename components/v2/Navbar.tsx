"use client"

import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { getResume } from '@/lib/actions'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const [resumeUrl, setResumeUrl] = useState<string | null>(null)

    useEffect(() => {
        const fetchResume = async () => {
            const res = await getResume();

            if (res.success && res.resumeUrl) {
                setResumeUrl(typeof res.resumeUrl === 'string' ? res.resumeUrl : String(res.resumeUrl))
            }
        }
        fetchResume();
    }, [])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Articles', href: '/articles' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <div className='w-full px-5 md:px-24 lg:px-52 py-6 flex justify-between items-center bg-[#F0F1F3] relative z-50'>
            <Link href='/' className='text-2xl md:text-5xl font-bold text-black'>N.</Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:block'>
                <ul className='flex gap-6 text-black font-medium text-sm sm:text-lg'>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href}>
                            <li className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>
                                {link.name}
                            </li>
                        </Link>
                    ))}

                    {
                        resumeUrl && <Link href={resumeUrl}>
                            <li className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>
                                Resume
                            </li>
                        </Link>
                    }
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className='md:hidden absolute top-6 right-4 z-10'>
                {isMenuOpen ? (
                    <X size={25} className='text-black cursor-pointer z-50' onClick={toggleMenu} />
                ) : (
                    <Menu size={25} className='text-black cursor-pointer' onClick={toggleMenu} />
                )}
            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#F0F1F3] transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className='flex justify-between items-center w-full py-6 px-4 md:px-8 lg:px-12'>
                    <h1 className='text-2xl font-bold text-black'>N.</h1>
                </div>
                <nav className='mt-8'>
                    <ul className='flex flex-col items-center gap-10 text-black font-medium text-lg'>
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} onClick={toggleMenu}>
                                <li className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>
                                    {link.name}
                                </li>
                            </Link>
                        ))}
                        {
                            resumeUrl && <Link href={resumeUrl}>
                                <li className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>
                                    Resume
                                </li>
                            </Link>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
