export const dynamic = "force-dynamic";

import { FETCH_ARTICLES_LIMITED } from '@/lib/quaries'
import { sanityFetch } from '@/sanity/lib/live'
import React from 'react'
import Article from './Article'

const ArticleSection = async () => {
    const { data: posts } = await sanityFetch({ query: FETCH_ARTICLES_LIMITED })
    return (
        <>{posts && posts.length > 0 ? (
            posts.map((article: any) => <Article key={article._id} article={article} />)
        ) : (
            <p className="text-light-secondary dark:text-dark-secondary">No articles available.</p>
        )}</>
    )
}

export default ArticleSection