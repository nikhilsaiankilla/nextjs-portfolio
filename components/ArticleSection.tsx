export const dynamic = "force-dynamic";

import { FETCH_ARTICLES_LIMITED } from '@/lib/quaries'
import { sanityFetch } from '@/sanity/lib/live'
import React from 'react'
import Article from './Article'
import NextPageBtn from './NextPageBtn';
import { ArrowRight } from 'lucide-react';

const ArticleSection = async () => {
    const { data: posts } = await sanityFetch({ query: FETCH_ARTICLES_LIMITED })
    return (
        <section id="blog" className="blog  my-10">
            <div className="w-full flex items-center justify-between">
                <h2 className="section-title my-4">Articles & publications</h2>
                <NextPageBtn destination="/articles" title="View More Posts" icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />} />
            </div>

            <div className="w-full flex flex-col gap-5">
                {posts && posts.length > 0 ? (
                    posts.map((article: any) => <Article key={article._id} article={article} />)
                ) : (
                    <p className="text-light-secondary dark:text-dark-secondary">No articles available.</p>
                )}
            </div>
        </section>
    )
}

export default ArticleSection