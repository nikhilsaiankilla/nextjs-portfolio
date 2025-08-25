import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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

const Article: React.FC<ArticleProps> = ({ article }) => {
    if (!article) return null;

    const { title, slug, image, content } = article;
    const articleLink = `/articles/${slug.current}`;

    const imageUrl = image
        ? urlFor(image.asset._ref).url()
        : 'https://via.placeholder.com/600x400.png?text=Article+Image';

    const previewText = content?.[0]?.children?.[0]?.text || 'No preview available.';

    return (
        <Link
            href={articleLink}
            className="h-full flex flex-col p-6 rounded-lg bg-[#E0E1E3] transition-all duration-300 ease-in-out hover:bg-[#D0D1D3] group"
            aria-label={`Read full article: ${title}`}
        >
            {/* Article Image */}
            <div className="w-full aspect-video rounded-md overflow-hidden bg-gray-400 mb-4">
                <Image
                    src={imageUrl}
                    alt={`Cover image for article: ${title}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
            </div>

            {/* Article Content */}
            <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-black mb-2 leading-tight">
                    {title}
                </h3>
                <p className="text-sm text-gray-700 flex-grow leading-snug mb-4">
                    {previewText.length > 150 ? `${previewText.substring(0, 150)}...` : previewText}
                </p>
            </div>

            {/* Read More Link */}
            <div className="mt-auto self-start">
                <span className="flex items-center gap-1 text-black font-semibold text-sm transition-transform duration-200 ease-in-out group-hover:translate-x-1">
                    Read Article
                    <ArrowRight size={16} className="transition-transform duration-200 ease-in-out group-hover:-rotate-45" />
                </span>
            </div>
        </Link>
    );
};

export default Article;