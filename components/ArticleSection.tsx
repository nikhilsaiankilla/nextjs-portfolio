import React from 'react';
import Article from './Article';
import NextPageBtn from './NextPageBtn';
import { ArrowRight } from 'lucide-react';

/**
 * Displays a limited number of articles or blog posts.
 * Fetches posts from Sanity CMS using SSR (revalidated every 60 seconds).
 */

type Props = {
    posts: any[]; // Array of articles fetched from Sanity
}

const ArticleSection = ({ posts }: Props) => {

    return (
        <section
            id="blog"
            className="blog my-10"
            aria-labelledby="articles-heading"
            role="region"
        >
            {/* Section heading and "View More" button */}
            <div className="w-full flex items-center justify-between">
                <h2
                    id="articles-heading"
                    className="section-title my-4"
                    role="heading"
                    aria-level={2}
                >
                    Articles & Publications
                </h2>

                <NextPageBtn
                    destination="/articles"
                    title="View More Posts"
                    icon={
                        <ArrowRight
                            size={14}
                            className="group-hover:-rotate-45 transition-all duration-200 ease-in-out"
                        />
                    }
                />
            </div>

            {/* Render articles or a fallback message */}
            <div className="w-full flex flex-col gap-5" aria-label="List of recent articles" role="list">
                {posts && posts.length > 0 ? (
                    posts.map((article: any) => (
                        <Article key={article._id} article={article} />
                    ))
                ) : (
                    <p className="text-light-secondary dark:text-dark-secondary" role="note">
                        No articles available.
                    </p>
                )}
            </div>
        </section>
    );
};

export default ArticleSection;
