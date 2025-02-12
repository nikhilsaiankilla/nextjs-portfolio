"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-[55%] absolute top-5 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="hidden lg:flex items-center justify-center w-full relative">
                <motion.ul
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? "100%" : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="flex items-center justify-center gap-5 px-4 py-2 shadow-md overflow-hidden bg-white dark:bg-[#242424] text-black dark:text-white"
                >
                    <Link href="#intro" className="navlink" onClick={() => isOpen && setIsOpen(false)}>Intro</Link>
                    <Link href="#about" className="navlink" onClick={() => isOpen && setIsOpen(false)}>About</Link>
                    <Link href="#projects" className="navlink" onClick={() => isOpen && setIsOpen(false)}>Projects</Link>
                    <Link href="#stack" className="navlink" onClick={() => isOpen && setIsOpen(false)}>Stack</Link>
                </motion.ul>

                <button
                    onClick={handleNav}
                    className={`p-2 rounded-md shadow-md transition-all duration-300 ${isOpen ? "dark:bg-dark-primary" : "dark:bg-[#242424]"} dark:text-white text-black`}
                >
                    <Plus size={20} className={`${isOpen ? "rotate-45" : "rotate-0"} transition-all duration-300`} />
                </button>


                <motion.ul
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0, width: isOpen ? "100%" : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="flex items-center justify-center gap-5 px-4 py-2 shadow-md overflow-hidden bg-white dark:bg-[#242424] text-black dark:text-white"
                >
                    <Link href="#education" className="navlink" onClick={() => isOpen && setIsOpen(false)}>Education</Link>
                    <Link href="#certificates" className="navlink" onClick={() => isOpen && setIsOpen(false)}>Certificates</Link>
                    <Link href="#blog" className="navlink" onClick={() => isOpen && setIsOpen(false)}>Blog</Link>
                    <Link href="#contact" className="navlink" onClick={() => isOpen && setIsOpen(false)}>Contact</Link>
                </motion.ul>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 z-20 lg:hidden">
                <button
                    onClick={handleNav}
                    className={`p-2 rounded-md shadow-md transition-all duration-300 ${isOpen ? "dark:bg-dark-primary" : "dark:bg-[#242424]"} dark:text-white text-black`}
                >
                    <Plus size={20} className={`${isOpen ? "rotate-45" : "rotate-0"} transition-all duration-300`} />
                </button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute z-10 top-14 left-1/2 -translate-x-1/2 w-[90vw] shadow-lg rounded-lg p-4 flex flex-col items-center bg-white dark:bg-[#242424] text-black dark:text-white lg:hidden"
                >
                    <Link href="#intro" className="navlink py-2" onClick={() => isOpen && setIsOpen(false)}>Intro</Link>
                    <Link href="#about" className="navlink py-2" onClick={() => isOpen && setIsOpen(false)}>About</Link>
                    <Link href="#projects" className="navlink py-2" onClick={() => isOpen && setIsOpen(false)}>Projects</Link>
                    <Link href="#stack" className="navlink py-2" onClick={() => isOpen && setIsOpen(false)}>Stack</Link>
                    <Link href="#education" className="navlink py-2" onClick={() => isOpen && setIsOpen(false)}>Education</Link>
                    <Link href="#certificates" className="navlink py-2" onClick={() => isOpen && setIsOpen(false)}>Certificates</Link>
                    <Link href="#blog" className="navlink py-2" onClick={() => isOpen && setIsOpen(false)}>Blog</Link>
                    <Link href="#contact" className="navlink py-2" onClick={() => isOpen && setIsOpen(false)}>Contact</Link>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
