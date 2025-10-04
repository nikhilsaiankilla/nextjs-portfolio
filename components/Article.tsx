import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/types";

interface ArticleProps {
    article: Article;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
    if (!article) return null;

    const { title, image, id, description, createdAt } = article;
    const articleLink = `/articles/${id}`;

    return (
        <Link
            href={articleLink}
            aria-label={`Read full article: ${title}`}
            className="group flex flex-col gap-4 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
            {/* Image */}
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                    src={image || "https://via.placeholder.com/800x450.png?text=Article+Image"}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.05]"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col px-3 pb-3">
                <h3 className="text-xl font-semibold tracking-tight text-dark-accent dark:text-light-accent group-hover:underline underline-offset-4 decoration-1 decoration-gray-400 transition-colors duration-200">
                    {title}
                </h3>

                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                    {description}
                </p>

                <span className="flex items-center mt-3">
                    <p className="text-sm text-gray-600 mr-2">Posted On:</p>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                        {createdAt && new Date(createdAt).toLocaleDateString("en-US", {
                            year: 'numeric',
                            month: 'long',
                            day: "numeric"
                        })}
                    </p>
                </span>

                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-dark-accent/80 dark:text-light-accent/80 group-hover:text-dark-accent dark:group-hover:text-light-accent transition-colors">
                    Read Article
                    <ArrowRight
                        size={15}
                        className="transition-transform duration-300 ease-in-out group-hover:-rotate-45 group-hover:translate-x-1"
                    />
                </div>
            </div>
        </Link>
    );
};

export default Article;
