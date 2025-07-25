"use client";

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

/**
 * ThemeSwitcher component allows users to toggle between
 * light and dark themes. It uses `next-themes` for theme management.
 */
const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme(); // Access current theme and setter
    const [mounted, setMounted] = useState(false); // Ensures component is mounted before rendering

    // Ensures theme is correctly rendered client-side (fixes hydration mismatch)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent rendering until component is mounted (avoids SSR issues)
    if (!mounted) return null;

    return (
        <div
            className="p-2 rounded-md bg-white dark:bg-[#363636] absolute right-2 top-2 cursor-pointer shadow-md"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    setTheme(theme === "dark" ? "light" : "dark");
                }
            }}
        >
            {/* Icon based on active theme */}
            {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" aria-hidden="true" />
            ) : (
                <Moon className="w-5 h-5 text-black" aria-hidden="true" />
            )}
        </div>
    );
};

export default ThemeSwitcher;
