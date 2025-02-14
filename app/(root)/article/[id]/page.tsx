import Article from '@/components/Article'
import BackBtn from '@/components/BackBtn'
import ContactSection from '@/components/ContactSection'
import NextPageBtn from '@/components/NextPageBtn'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
    return (
        <div className='page'>
            <ThemeSwitcher />
            <BackBtn />

            <div className='w-full'>
                <h1 className='text-lg font-bold leading-normal'>Article Title</h1>
                <p className='text-description text-sm mt-2'>Article tagline</p>
                <Image
                    src="/nikhil.webp"
                    alt="project thumbnail"
                    width={1000}
                    height={500}
                    className="w-full object-cover rounded-md overflow-hidden aspect-square sm:aspect-video my-5"
                />

                <div className='text-description text-sm mt-4 text-left flex flex-col gap-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis eius quos at quia velit dolorem delectus nulla eligendi? Repudiandae officiis, molestiae ad in asperiores natus voluptatibus fugit iste minima mollitia veniam quos dolor aliquam, accusamus, nobis explicabo aliquid iure?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis eius quos at quia velit dolorem delectus nulla eligendi? Repudiandae officiis, molestiae ad in asperiores natus voluptatibus fugit iste minima mollitia veniam quos dolor aliquam, accusamus, nobis explicabo aliquid iure?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis eius quos at quia velit dolorem delectus nulla eligendi? Repudiandae officiis, molestiae ad in asperiores natus voluptatibus fugit iste minima mollitia veniam quos dolor aliquam, accusamus, nobis explicabo aliquid iure?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit perspiciatis eius quos at quia velit dolorem delectus nulla eligendi? Repudiandae officiis, molestiae ad in asperiores natus voluptatibus fugit iste minima mollitia veniam quos dolor aliquam, accusamus, nobis explicabo aliquid iure?</p>
                </div>

                <div className="w-full flex items-center justify-between">
                    <h2 className="section-title my-4">Popular articles</h2>
                    <NextPageBtn destination="/articles" title="view more posts" icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />} />
                </div>

                <div className="w-full flex flex-col gap-5">
                    {Array.from({ length: 2 }).map((_,index) => <Article key={index}/>)}
                </div>
            </div>

            <ContactSection/>
        </div>
    )
}

export default Page