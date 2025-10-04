import React from "react";
import Article from "@/components/Article";
import ContactSection from "@/components/ContactSection";

import type { Metadata } from "next";
import { adminDatabase } from "@/lib/firebaseAdmin";

export const metadata: Metadata = {
    title: "Articles",
    description:
        "Read technical articles and blog posts by Nikhil Sai Ankilla covering web development, React, Next.js, TypeScript, and full stack best practices.",
    keywords: [
        "Nikhil Sai Ankilla Articles",
        "Developer Blog",
        "Tech Blog",
        "Web Development Articles",
        "React Blog",
        "Next.js Blog",
        "TypeScript Blog",
        "Full Stack Development Blog",
        "Software Engineering Posts",
        "Nikhil Tech Blog",
        "Programming Blog",
    ],
    openGraph: {
        title: "Articles | Nikhil Sai Ankilla",
        description:
            "Explore articles and insights by Nikhil on modern web development, best practices, and tools like React, Next.js, and TypeScript.",
        url: "https://nikhilsaiankilla.blog/articles",
        siteName: "Nikhil Sai Ankilla Portfolio",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Nikhil Sai Ankilla - Full Stack Developer",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Articles | Nikhil Sai Ankilla",
        description:
            "Browse development articles and tech blogs by Nikhil on full stack development, React, Next.js, and more.",
        creator: "@NikhilSaiAnkil1",
        images: ["/opengraph-image.png"],
    },
    alternates: {
        canonical: "https://nikhilsaiankilla.blog/articles",
    },
};

export const revalidate = 60;

async function getPosts() {
    try {
        const res = await adminDatabase.collection("articles").orderBy("createdAt", "asc").limit(3).get();

        if (res.empty) {
            return [];
        }

        const posts: Article[] = res.docs.map((doc: any) => {
            const data = doc.data();

            return {
                id: doc.id,
                title: data.title,
                tagline: data.tagline,
                description: data.description,
                image: data.image,
                createdAt: data.createdAt
            }
        });
        return posts;
    } catch (error) {
        console.log("Error fetching posts:", error);
        return [];
    }
}

const Page = async () => {
    const posts = await getPosts(); // default: 6 articles

    return (
        <div className="w-full px-5 md:px-24 lg:px-52 bg-[#F0F1F3]">
            <div className="mt-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    Articles
                </h1>
                <p className="text-muted-foreground text-sm">
                    A collection of my writings on building, learning, and experimenting with web technologies and creative ideas.
                </p>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5">
                {posts && posts.length > 0 ? (
                    posts.map((article, index) => (
                        <Article key={article.id} article={article} />
                    ))
                ) : (
                    <p className="text-light-secondary dark:text-dark-secondary">
                        No articles available.
                    </p>
                )}
            </div>

            <div className="mt-10">
                <ContactSection />
            </div>
        </div>
    );
};

export default Page;
