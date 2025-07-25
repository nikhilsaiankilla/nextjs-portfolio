import ArticleSection from '@/components/ArticleSection';
import BackBtn from '@/components/BackBtn';
import ContactSection from '@/components/ContactSection';
import NextPageBtn from '@/components/NextPageBtn';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { FETCH_ARTICLE_WITH_ID } from '@/lib/quaries';
import { timeAgo } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText, PortableTextComponents } from 'next-sanity';
import type { Metadata } from 'next';

const customComponents: PortableTextComponents = {
    marks: {
        code: ({ children }) => (
            <code className="bg-gray-900 text-[#E1E1E1] px-2 py-1 rounded-md text-sm font-mono block w-full">
                {children}
            </code>
        ),
    },
    block: {
        normal: ({ children }) => <p className="text-sm">{children}</p>,
        h1: ({ children }) => <h1 className="text-xl font-bold text-light-accent dark:text-dark-accent">{children}</h1>,
        h2: ({ children }) => <h2 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h2>,
        h3: ({ children }) => <h3 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h3>,
        h4: ({ children }) => <h4 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h4>,
        h5: ({ children }) => <h5 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h5>,
        h6: ({ children }) => <h6 className="text-lg font-semibold text-light-accent dark:text-dark-accent">{children}</h6>,
        blockquote: ({ children }) => (
            <blockquote
                className="border-l-4 border-gray-500 pl-4 italic text-light-accent dark:text-dark-accent"
                aria-label="blockquote"
            >
                {children}
            </blockquote>
        ),
        code: ({ children }) => (
            <pre className="w-full max-w-full bg-[#1E1E1E] text-[#E1E1E1] p-4 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre">
                <code className="block w-full">{children}</code>
            </pre>
        ),
    },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;

  const article = await sanityFetch({
    query: FETCH_ARTICLE_WITH_ID,
    params: { id },
  });

  if (!article || !article.data) return {};

  const { title, description, image } = article.data;

  return {
    title: `${title} | Nikhil Sai Ankilla`,
    description:
      description || "Read this insightful article by Nikhil Sai Ankilla.",
    keywords: [
      "Nikhil Sai Ankilla",
      "Developer Articles",
      "Tech Blogs",
      "Full Stack Blog",
      "Next.js Article",
      "React Blog",
      "Software Engineering Insights",
      "Developer Guide",
      "Programming Tips",
      "Code Tutorials",
      title,
    ],
    metadataBase: new URL("https://nikhilsaiportfolio.vercel.app"),
    openGraph: {
      title: `${title} | Nikhil Sai Ankilla`,
      description:
        description || "Read this insightful article by Nikhil Sai Ankilla.",
      url: `https://nikhilsaiportfolio.vercel.app/article/${id}`,
      siteName: "Nikhil Sai Ankilla Portfolio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Nikhil Sai Ankilla`,
      description:
        description || "Read this insightful article by Nikhil Sai Ankilla.",
      creator: "@NikhilSaiAnkil1",
      images: [image],
    },
    authors: [
      {
        name: "Nikhil Sai Ankilla",
        url: "https://nikhilsaiportfolio.vercel.app",
      },
    ],
    creator: "Nikhil Sai Ankilla",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: `https://nikhilsaiportfolio.vercel.app/article/${id}`,
    },
  };
}


// Article Page
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;

    if (!id) return notFound();

    const article = await sanityFetch({
        query: FETCH_ARTICLE_WITH_ID,
        params: { id },
    });

    if (!article || !article.data) return notFound();

    return (
        <main className="page" role="main" aria-label="Article Page">
            <ThemeSwitcher />
            <BackBtn />

            <article className="w-full" aria-labelledby="article-title">
                <header>
                    <h1 id="article-title" className="text-lg font-bold leading-normal">
                        {article.data.title}
                    </h1>
                    <p className="text-description text-sm mt-2">
                        {timeAgo(article.data.publishedDate)}
                    </p>
                </header>

                <figure className="my-5">
                    <Image
                        src={article.data.image}
                        alt={article.data.title}
                        width={1000}
                        height={500}
                        className="w-full object-cover rounded-md overflow-hidden aspect-video"
                        role="img"
                    />
                </figure>

                <section
                    className="text-description w-full text-sm mt-4 text-left flex flex-col gap-5"
                    aria-label="Article Content"
                >
                    <PortableText value={article.data.content} components={customComponents} />
                </section>

                <section className="w-full flex items-center justify-between mt-10" aria-label="Popular Articles Section">
                    <h2 className="section-title my-4">Popular articles</h2>
                    <NextPageBtn
                        destination="/articles"
                        title="view more posts"
                        icon={
                            <ArrowRight
                                size={14}
                                className="group-hover:-rotate-45 transition-all duration-200 ease-in-out"
                            />
                        }
                    />
                </section>

                <section className="w-full flex flex-col gap-5" aria-label="Popular Articles List">
                    <ArticleSection />
                </section>
            </article>

            <ContactSection />
        </main>
    );
};

export default Page;
