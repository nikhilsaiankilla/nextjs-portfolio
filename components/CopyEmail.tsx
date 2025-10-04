"use client";

import { useToast } from '@/hooks/use-toast';
import { Copy, Mail } from 'lucide-react';
import React from 'react';

const CopyEmail = () => {
    const { toast } = useToast();

    // Handle click to copy email to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText('nikhilsaiankilla@gmail.com')
            .then(() =>
                toast({
                    title: "Copied",
                    description: "Text copied to clipboard.",
                })
            )
            .catch(() =>
                toast({
                    title: "Failed To Copy",
                    description: "Please try once again.",
                    variant: "destructive",
                })
            );
    };

    return (
        <div
            onClick={handleCopy}
            aria-label="Copy email to clipboard"
            title="Click to copy email"
            className="flex items-center gap-2 p-3 rounded-lg border cursor-pointer border-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white group">
            {/* Accessible button with icon */}

            <Mail />

            {/* Display email next to icon */}
            <span className="email text-sm select-text">nikhilsaiankilla@gmail.com</span>
        </div>
    );
};

export default CopyEmail;
