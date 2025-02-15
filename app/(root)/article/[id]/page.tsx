import ArticleSection from '@/components/ArticleSection'
import BackBtn from '@/components/BackBtn'
import ContactSection from '@/components/ContactSection'
import NextPageBtn from '@/components/NextPageBtn'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { FETCH_ARTICLE_WITH_ID } from '@/lib/quaries'
import { timeAgo } from '@/lib/utils'
import { sanityFetch } from '@/sanity/lib/live'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import { PortableText, PortableTextComponents } from "next-sanity";

const customComponents: PortableTextComponents = {
    marks: {
        code: ({ children }) => (
            <code className="bg-gray-900 text-[#E1E1E1] px-2 py-1 rounded-md text-sm font-mono w-full block">
                {children}
            </code>
        ),
    },
    block: {
        normal: ({ children }) => <p className="text-sm">{children}</p>,
        h1: ({ children }) => <h1 className="text-xl font-bold text-light-accent dark:text-dark-accent">{children}</h1>,
        h2: ({ children }) => <h2 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h2>,
        h3: ({ children }) => <h3 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h3>,
        h4: ({ children }) => <h4 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h4>,
        h5: ({ children }) => <h5 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h5>,
        h6: ({ children }) => <h6 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h6>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-500 pl-4 italic text-light-accent dark:text-dark-accent">{children}</blockquote>
        ),
        code: ({ children }) => (
            <pre className="w-full max-w-full bg-[#1E1E1E] text-[#E1E1E1] p-4 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre">
                <code className="block w-full">{children}</code>
            </pre>
        ),
    },
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    if (!id) {
        return notFound();
    }

    const article = await sanityFetch({
        query: FETCH_ARTICLE_WITH_ID,
        params: { id },
    })

    if (!article) {
        return notFound();
    }

    return (
        <div className='page'>
            <ThemeSwitcher />
            <BackBtn />

            <div className='w-full'>
                <h1 className='text-lg font-bold leading-normal'>{article?.data?.title}</h1>
                <p className='text-description text-sm mt-2'>{timeAgo(article?.data.publishedDate)}</p>
                <Image
                    src={article?.data.image}
                    alt={article?.data.title}
                    width={1000}
                    height={500}
                    className="w-full object-cover rounded-md overflow-hidden aspect-square sm:aspect-video my-5"
                />

                <div className="text-description w-full text-sm mt-4 text-left flex flex-col gap-5">
                    <PortableText value={article?.data.content} components={customComponents} />
                </div>

                <div className="w-full flex items-center justify-between mt-10">
                    <h2 className="section-title my-4">Popular articles</h2>
                    <NextPageBtn destination="/articles" title="view more posts" icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />} />
                </div>

                <div className="w-full flex flex-col gap-5">
                    <ArticleSection />
                </div>
            </div>

            <ContactSection />
        </div>
    )
}

export default Page