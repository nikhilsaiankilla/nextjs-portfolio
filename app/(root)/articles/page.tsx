import Article from '@/components/Article'
import BackBtn from '@/components/BackBtn'
import ContactSection from '@/components/ContactSection'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { FETCH_ARTICLES } from '@/lib/quaries'
import { sanityFetch } from '@/sanity/lib/live'
import React from 'react'

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Articles",
    description:
        "Read technical articles and blog posts by Nikhil Sai Ankilla covering web development, React, Next.js, TypeScript, and full stack best practices.",
    keywords: [
        "Nikhil Sai Ankilla Articles",
        "Developer Blog",
        "Tech Blog",
        "Web Development Articles",
        "React Blog",
        "Next.js Blog",
        "TypeScript Blog",
        "Full Stack Development Blog",
        "Software Engineering Posts",
        "Nikhil Tech Blog",
        "Programming Blog",
    ],
    openGraph: {
        title: "Articles | Nikhil Sai Ankilla",
        description:
            "Explore articles and insights by Nikhil on modern web development, best practices, and tools like React, Next.js, and TypeScript.",
        url: "https://nikhilsaiportfolio.vercel.app/articles",
        siteName: "Nikhil Sai Ankilla Portfolio",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Nikhil Sai Ankilla - Full Stack Developer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Articles | Nikhil Sai Ankilla",
        description:
            "Browse development articles and tech blogs by Nikhil on full stack development, React, Next.js, and more.",
        creator: "@NikhilSaiAnkil1",
        images: ["/opengraph-image.png"],
    },
    alternates: {
        canonical: "https://nikhilsaiportfolio.vercel.app/articles",
    },
};

export const revalidate = 60;

const page = async () => {
    const { data: posts } = await sanityFetch({ query: FETCH_ARTICLES })
    return (
        <div className="page">
            <ThemeSwitcher />
            <BackBtn />
            <h1 className="section-title my-5 text-3xl">Articles</h1>
            <div className="w-full grid grid-cols-1 gap-3">
                {posts && posts.length > 0 ? (
                    posts.map((article: any) => <Article key={article._id} article={article} />)
                ) : (
                    <p className="text-light-secondary dark:text-dark-secondary">No articles available.</p>
                )}
            </div>

            <ContactSection />
        </div>
    )
}

export default page