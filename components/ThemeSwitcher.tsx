"use client";

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;
    return (
        <div className="p-2 rounded-md bg-white dark:bg-[#363636] absolute right-2 top-2 cursor-pointer shadow-md" onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-black" />}
        </div>
    )
}

export default ThemeSwitcher