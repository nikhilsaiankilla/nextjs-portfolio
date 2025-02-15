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

const Article: React.FC<ArticleProps> = ({ article }) => {
    if (!article) return null;

    const { title, _id, image, content } = article;

    const imageUrl = image ? urlFor(image.asset._ref).url() : "https://via.placeholder.com/500";

    const previewText = content?.[0]?.children?.[0]?.text || "No preview available";

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 group">
            <div className="w-full aspect-video bg-gray-300 rounded-md overflow-hidden">
                <Link href={`/article/${_id}`}>
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={500}
                        height={400}
                        className="group-hover:scale-105 transition-all duration-500 ease-in-out object-cover"
                    />
                </Link>
            </div>
            <div className="w-full h-auto md:h-full flex flex-col justify-between">
                <Link href={`/article/${_id}`}>
                    <h3 className="text-lg font-bold text-light-accent dark:text-dark-accent">
                        {title}
                    </h3>
                </Link>
                <p className="text-sm leading-tight font-normal text-light-secondary dark:text-dark-secondary">
                    {reduceSize(previewText, 300)}
                </p>
                <Link href={`/article/${_id}`} className="w-full flex justify-end">
                    <NextPageBtn
                        title="Read Article"
                        icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Article;
