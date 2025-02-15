"use client";

import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react'
import React from 'react'

const CopyEmail = () => {
    const { toast } = useToast();

    const handleCopy = () => {
        navigator.clipboard.writeText('nikhilsaiankilla@gmail.com').then(() => toast({
            title: "Copied",
            description: "Text copied to clipboard.",
        })).catch(err => toast({
            title: "Failed To Copy",
            description: "Please try once again.",
            variant: "destructive",
        }))
    }
    return (
        <><Copy size={17} onClick={handleCopy} /> <span className="email">nikhilsaiankilla@gmail.com</span></>
    )
}

export default CopyEmail