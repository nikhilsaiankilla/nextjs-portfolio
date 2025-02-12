"use client";

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { Switch } from "@/components/ui/switch";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;
    return (
        <div className="flex items-center space-x-2 w-fit">
            <Sun className="w-5 h-5 text-yellow-500 dark:text-gray-400" />
            <Switch
                checked={theme === "dark"}
                onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                className='shadow-2xl bg-gray-100'
            />
            <Moon className="w-5 h-5 text-gray-800 dark:text-yellow-500" />
        </div>
    )
}

export default ThemeSwitcher