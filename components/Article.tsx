import Image from 'next/image'
import React from 'react'
import NextPageBtn from './NextPageBtn'
import { ArrowRight } from 'lucide-react'
import { reduceSize } from '@/lib/utils'
import Link from 'next/link'

const Article = () => {
    const text: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, tempore debitis quod perspiciatis voluptatum laudantium dolor quos natus ipsa possimus recusandae dolore amet, quae, harum illum rerum officiis quo eligendi reiciendis sed quis? Nemo delectus porro reprehenderit quos ut sunt ab voluptate tenetur, cum quis, vero laboriosam natus repellat beatae dignissimos similique hic doloremque ex modi?"
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 group">
            <div className="w-full aspect-video bg-red-300 rounded-md overflow-hidden">
                <Link href={'/article/1'}>
                    <Image src="https://avatars.githubusercontent.com/u/109269825?v=4"
                        alt="blog thumbnail"
                        width={500}
                        height={400}
                        className="group-hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                </Link>
            </div>
            <div className="w-full h-auto md:h-full flex flex-col justify-between">
                <Link href={'/article/1'}><h3 className="text-lg font-bold text-light-accent dark:text-dark-accent">The Future of Web Design: Trends to Watch in 2024</h3></Link>
                <p className="text-sm leading-tight font-normal text-light-secondary dark:text-dark-secondary">{reduceSize(text, 50)}</p>
                <span className="w-full flex justify-end">
                    <NextPageBtn title="Read Article" icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />} />
                </span>
            </div>
        </div>
    )
}

export default Article