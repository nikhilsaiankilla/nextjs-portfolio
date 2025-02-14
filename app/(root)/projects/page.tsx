import BackBtn from '@/components/BackBtn';
import ContactSection from '@/components/ContactSection';
import Project from '@/components/Project'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import React from 'react'

const Page = () => {

    return (
        <div className="page">
            <ThemeSwitcher />
            <BackBtn />
            <h1 className="section-title my-5 text-3xl">Projects</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                {Array.from({ length: 8 }).map((_, index) => (
                    <Project key={index} />
                ))}
            </div>

            <ContactSection/>
        </div>  
    );
};

export default Page;
