import BackBtn from '@/components/BackBtn'
import Button from '@/components/Button'
import ContactSection from '@/components/ContactSection'
import NextPageBtn from '@/components/NextPageBtn'
import ProjectSection from '@/components/ProjectSection'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { FETCH_PROJECT_WITH_ID } from '@/lib/quaries'
import { sanityFetch } from '@/sanity/lib/live'
import { ArrowRight, Component } from 'lucide-react'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    if (!id) {
        return notFound();
    }

    const project: any = await sanityFetch({
        query: FETCH_PROJECT_WITH_ID,
        params: { id },
    });

    if (!project) {
        return notFound();
    }
    return (
        <div className='page'>
            <ThemeSwitcher />
            <BackBtn />
            <div className='w-full'>
                <h1 className='text-lg font-bold leading-normal'>{project?.data.title}</h1>
                <p className='text-description text-sm mt-2'>{project?.data.tagline}</p>
                <Image
                    src={project?.data.image}
                    alt={project?.data.title}
                    width={1000}
                    height={500}
                    className="w-full object-cover rounded-md overflow-hidden aspect-square sm:aspect-video my-5"
                />

                <div className='flex gap-5'>
                    <Button title='View Demo' destination={project?.data.demo_url} icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />} />
                    <Button title='View Code' destination={project?.data.source_url} icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />} />
                </div>

                <h2 className='section-title mt-4 mb-3'>Tech stack</h2>
                <div className='w-full flex items-center justify-start flex-wrap gap-4'>
                    {project.data.tech_stack.map((tech: any) => (
                        <span key={tech?._id} className='border-[2px] border-light-secondary dark:border-emerald-400 rounded-sm px-4 py-1 text-sm flex items-center gap-2 cursor-pointer'>
                            <Component size={13} className='text-emerald-400' /> {tech?.name}
                        </span>
                    ))}
                </div>

                <div className='text-description text-sm mt-4 text-left flex flex-col gap-5'>
                    <PortableText value={project?.data.description} />
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
                <ProjectSection />
            </div>

            <ContactSection />
        </div >
    )
}

export default page