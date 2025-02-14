import BackBtn from '@/components/BackBtn'
import Button from '@/components/Button'
import ContactSection from '@/components/ContactSection'
import NextPageBtn from '@/components/NextPageBtn'
import Project from '@/components/Project'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { ArrowRight, Component, Database } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
    return (
        <div className='page'>
            <ThemeSwitcher />
            <BackBtn />
            <div className='w-full'>
                <h1 className='text-lg font-bold leading-normal'>Project title</h1>
                <p className='text-description text-sm mt-2'>Project tagline</p>
                <Image
                    src="/nikhil.webp"
                    alt="project thumbnail"
                    width={1000}
                    height={500}
                    className="w-full object-cover rounded-md overflow-hidden aspect-square sm:aspect-video my-5"
                />

                <div className='flex gap-5'>
                    <Button title='View Demo' icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />} />
                    <Button title='View Code' icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />} />
                </div>

                <h2 className='section-title mt-4 mb-3'>Tech stack</h2>
                <div className='w-full flex items-center justify-start flex-wrap gap-4'>
                    {Array.from({ length: 7 }).map((_, index) => <span key={index} className='border-[2px] border-light-secondary dark:border-emerald-400 rounded-sm px-4 py-1 text-sm flex items-center gap-2 cursor-pointer'> <Component size={13} className='text-emerald-400' /> mongoDB</span>)}

                </div>

                <div className='text-description text-sm mt-4 text-left flex flex-col gap-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis eius quos at quia velit dolorem delectus nulla eligendi? Repudiandae officiis, molestiae ad in asperiores natus voluptatibus fugit iste minima mollitia veniam quos dolor aliquam, accusamus, nobis explicabo aliquid iure?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis eius quos at quia velit dolorem delectus nulla eligendi? Repudiandae officiis, molestiae ad in asperiores natus voluptatibus fugit iste minima mollitia veniam quos dolor aliquam, accusamus, nobis explicabo aliquid iure?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis eius quos at quia velit dolorem delectus nulla eligendi? Repudiandae officiis, molestiae ad in asperiores natus voluptatibus fugit iste minima mollitia veniam quos dolor aliquam, accusamus, nobis explicabo aliquid iure?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis eius quos at quia velit dolorem delectus nulla eligendi? Repudiandae officiis, molestiae ad in asperiores natus voluptatibus fugit iste minima mollitia veniam quos dolor aliquam, accusamus, nobis explicabo aliquid iure?</p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <h2 className="section-title my-5">Popular Projects</h2>
                <NextPageBtn
                    title="view more projects"
                    destination="/projects"
                    icon=
                    {
                        <ArrowRight size={14}
                            className="group-hover:-rotate-45 transition-all duration-200 ease-in-out"
                        />}
                />
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
                <Project />
                <Project />
                <Project />
                <Project />
            </div>

            <ContactSection/>
        </div >
    )
}

export default page