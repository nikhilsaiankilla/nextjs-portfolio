import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { markdownToHtml, markdownToHtmlText } from "@/lib/utils";
import ContactSection from "@/components/ContactSection";
import ArticleSection from "@/components/ArticleSection";
import NextPageBtn from "@/components/NextPageBtn";
import { adminDatabase } from "@/lib/firebaseAdmin";
import { Article } from "@/types";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const articleRef = adminDatabase.collection("articles").doc(id);
  const articleDoc = await articleRef.get();
  const article = articleDoc.exists ? { id: articleDoc.id, ...articleDoc.data() } as Article : null;

  if (!article) return {};

  return {
    title: `${article.title} | Nikhil Sai Ankilla`,
    description: article.description ?? "Read this insightful article by Nikhil Sai Ankilla.",
    openGraph: {
      title: article.title,
      description: article.description ?? "",
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description ?? "",
      images: [article.image],
    },
  };
}

async function getPosts() {
  try {
    const res = await adminDatabase.collection("articles").orderBy("createdAt", "asc").limit(3).get();

    if (res.empty) {
      return [];
    }

    const posts: Article[] = await Promise.all(
      res.docs.map(async (doc: any) => {
        const data = doc.data();

        const descriptionHtml = data?.description ? await markdownToHtmlText(data.description) : "";

        return {
          id: doc.id,
          title: data.title,
          tagline: data.tagline,
          description: descriptionHtml,
          image: data.image,
          createdAt: data.createdAt
        }
      })
    );
    return posts;
  } catch (error) {
    console.log("Error fetching posts:", error);
    return [];
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  if (!id) return notFound();

  const articleRef = adminDatabase.collection("articles").doc(id);
  const articleDoc = await articleRef.get();
  const article = articleDoc.exists ? { id: articleDoc.id, ...articleDoc.data() } as Article : null;

  const descriptionHtml = article?.description ? await markdownToHtml(article.description) : "";

  if (!article) return notFound();

  const posts = await getPosts();

  return (
    <main className="w-full px-5 md:px-24 lg:px-52 bg-[#F0F1F3]" role="main" aria-label="Article Page">
      <article className="w-full pt-10" aria-labelledby="article-title">
        <header>
          <h1 id="article-title" className="text-lg font-bold leading-normal">
            {article.title}
          </h1>
          <p className="text-description text-sm mt-2">{article.createdAt && new Date(article.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}</p>
        </header>

        <figure className="my-5">
          <Image
            src={article?.image || "https://via.placeholder.com/1000x500.png?text=Article+Image"}
            alt={article.title}
            width={1000}
            height={500}
            className="w-full object-cover rounded-md overflow-hidden aspect-video"
          />
        </figure>

        <section
          className="prose prose-lg prose-neutral dark:prose-invert max-w-none
             prose-headings:scroll-mt-24
             prose-headings:mt-10 prose-headings:mb-4
             prose-p:leading-relaxed prose-p:my-6 prose-p:text-gray-800 dark:prose-p:text-gray-200
             prose-a:text-blue-600 hover:prose-a:text-blue-700
             prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:border-gray-300 dark:prose-blockquote:text-gray-400
             prose-img:rounded-xl prose-img:shadow-lg
             prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-pink-600
             space-y-8"
        >
          <article
            className="space-y-6"
            dangerouslySetInnerHTML={{ __html: descriptionHtml || "" }}
          />
        </section>


        <section className="w-full flex items-center justify-between mt-10" aria-label="Popular Articles Section">
          <h2 className="section-title my-4">Popular articles</h2>
          <NextPageBtn
            destination="/articles"
            title="view more posts"
            icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />}
          />
        </section>

        <section className="w-full flex flex-col gap-5" aria-label="Popular Articles List">
          <ArticleSection posts={posts} />
        </section>
      </article>

      <ContactSection />
    </main>
  );
}
