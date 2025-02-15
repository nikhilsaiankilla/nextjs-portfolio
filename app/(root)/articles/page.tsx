import Article from '@/components/Article'
import BackBtn from '@/components/BackBtn'
import ContactSection from '@/components/ContactSection'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { FETCH_ARTICLES } from '@/lib/quaries'
import { sanityFetch } from '@/sanity/lib/live'
import React from 'react'

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