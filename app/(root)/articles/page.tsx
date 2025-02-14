import Article from '@/components/Article'
import BackBtn from '@/components/BackBtn'
import ContactSection from '@/components/ContactSection'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import React from 'react'

const page = () => {
    return (
        <div className="page">
            <ThemeSwitcher />
            <BackBtn />
            <h1 className="section-title my-5 text-3xl">Articles</h1>
            <div className="w-full grid grid-cols-1 gap-3">
                {Array.from({ length: 8 }).map((_, index) => (
                    <Article key={index}/>
                ))}
            </div>

            <ContactSection/>
        </div>
    )
}

export default page