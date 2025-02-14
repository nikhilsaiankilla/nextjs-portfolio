"use client"; 

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackBtn = () => {
    const router = useRouter();

    return (
        <h2
            className="section-title my-5 flex items-center gap-3 cursor-pointer"
            onClick={() => router.back()}
        >
            <ArrowLeft size={17} /> Back
        </h2>
    );
};

export default BackBtn;
