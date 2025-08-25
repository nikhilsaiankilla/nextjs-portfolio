"use client"

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react' // Import X icon for the close button

const Navbar = () => {
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='w-full py-6 flex justify-between items-center bg-[#F0F1F3] relative z-50'>
            <h1 className='text-2xl md:text-5xl font-bold text-black'>N.</h1>

            {/* Desktop Navigation */}
            <nav className='hidden md:block'>
                <ul className='flex gap-6 text-black font-medium text-sm sm:text-lg'>
                    <li className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>Home</li>
                    <li className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>About</li>
                    <li className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>Projects</li>
                    <li className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>Blog</li>
                    <li className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>Contact</li>
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

            {/* Mobile Menu Panel with Transition */}
            <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-[#F0F1F3] transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex justify-between items-center w-full py-6 px-4 md:px-8 lg:px-12'>
                    <h1 className='text-2xl font-bold text-black'>N.</h1>
                </div>
                <nav className='mt-8'>
                    <ul className='flex flex-col items-center gap-10 text-black font-medium text-lg'>
                        <li onClick={toggleMenu} className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>Home</li>
                        <li onClick={toggleMenu} className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>About</li>
                        <li onClick={toggleMenu} className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>Projects</li>
                        <li onClick={toggleMenu} className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>Blog</li>
                        <li onClick={toggleMenu} className='hover:underline underline-offset-4 decoration-2 decoration-black cursor-pointer'>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar