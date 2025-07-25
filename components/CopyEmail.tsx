"use client";

import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';
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
        <div className="flex items-center gap-2">
            {/* Accessible button with icon */}
            <button
                onClick={handleCopy}
                aria-label="Copy email to clipboard"
                title="Click to copy email"
                className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
                <Copy size={17} aria-hidden="true" />
            </button>

            {/* Display email next to icon */}
            <span className="email text-sm select-text">nikhilsaiankilla@gmail.com</span>
        </div>
    );
};

export default CopyEmail;
