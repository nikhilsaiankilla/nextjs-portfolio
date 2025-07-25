import Image from 'next/image';
import React from 'react';
import NextPageBtn from './NextPageBtn';
import { ArrowRight } from 'lucide-react';
import { reduceSize } from '@/lib/utils';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

interface ArticleProps {
    article: {
        _id: string;
        title: string;
        content: { children: { text: string }[] }[];
        image?: { _type: 'image'; asset: { _ref: string } };
        slug: { current: string };
    };
}

/**
 * Displays an individual article preview with image, title, and excerpt.
 */
const Article: React.FC<ArticleProps> = ({ article }) => {
    if (!article) return null;

    const { title, _id, image, content } = article;

    const imageUrl = image
        ? urlFor(image.asset._ref).url()
        : 'https://via.placeholder.com/500';

    // Grab the first piece of visible content
    const previewText = content?.[0]?.children?.[0]?.text || 'No preview available';

    return (
        <article
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 group"
            role="article"
            aria-labelledby={`article-title-${_id}`}
        >
            {/* Article Image */}
            <div className="w-full aspect-video bg-gray-300 rounded-md overflow-hidden" role="img" aria-label={`Image for article: ${title}`}>
                <Link href={`/article/${_id}`} aria-label={`Read more about: ${title}`}>
                    <Image
                        src={imageUrl}
                        alt={`Cover image for article: ${title}`}
                        width={500}
                        height={400}
                        className="w-full h-full group-hover:scale-105 transition-all duration-500 ease-in-out object-cover"
                        loading="lazy"
                    />
                </Link>
            </div>

            {/* Article Content */}
            <div className="w-full h-auto md:h-full flex flex-col justify-between">
                <Link href={`/article/${_id}`} aria-labelledby={`article-title-${_id}`}>
                    <h3
                        id={`article-title-${_id}`}
                        className="text-lg font-bold text-light-accent dark:text-dark-accent"
                    >
                        {title}
                    </h3>
                </Link>

                <p className="text-sm leading-tight font-normal text-light-secondary dark:text-dark-secondary" aria-label="Article preview">
                    {reduceSize(previewText, 300)}
                </p>

                <Link href={`/article/${_id}`} className="w-full flex justify-end" aria-label={`Read full article: ${title}`}>
                    <NextPageBtn
                        title="Read Article"
                        icon={
                            <ArrowRight
                                size={14}
                                className="group-hover:-rotate-45 transition-all duration-200 ease-in-out"
                            />
                        }
                    />
                </Link>
            </div>
        </article>
    );
};

export default Article;
