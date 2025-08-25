import React from 'react';
import Article from './Article';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

type Props = {
    posts: any[];
}

const ArticleSection = ({ posts }: Props) => {
    return (
        <section
            id="blog"
            className="w-full my-16"
            aria-labelledby="articles-heading"
        >
            <div className="flex items-center justify-between mb-10">
                <h2 id="articles-heading" className="text-3xl font-bold flex items-center gap-3">
                    <BookOpen size={24} />
                    Articles & Publications
                </h2>
                <Link
                    href="/articles"
                    className="flex items-center gap-2 text-sm md:text-base font-semibold text-black transition-transform duration-200 ease-in-out hover:translate-x-1 group"
                >
                    View more posts
                    <ArrowRight
                        size={16}
                        className="transition-transform duration-200 ease-in-out group-hover:rotate-45"
                        aria-hidden="true"
                    />
                </Link>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts && posts.length > 0 ? (
                    posts.map((article: any) => (
                        <Article key={article._id} article={article} />
                    ))
                ) : (
                    <p className="text-black text-lg col-span-full text-center" role="note">
                        No articles available at the moment.
                    </p>
                )}
            </div>
        </section>
    );
};

export default ArticleSection;