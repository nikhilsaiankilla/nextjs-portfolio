import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import "@/app/globals.css";

const inter = Sour_Gummy({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nikhil Sai Ankilla | Full-Stack Developer",
  description: "Full-Stack Developer specializing in React, Next.js, Node.js, MySQL, and Tailwind CSS. Explore my portfolio and projects.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Sanity CMS",
    "Tailwind CSS",
  ],
  authors: [{ name: "Nikhil Sai Ankilla", url: "https://nikhilsaiportfolio.vercel.app/" }],
  metadataBase: new URL("https://nikhilsaiportfolio.vercel.app/"),
  openGraph: {
    title: "Nikhil Sai Ankilla | Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js, Node.js, MySQL, and Tailwind CSS. Explore my portfolio and projects.",
    url: "https://nikhilsaiportfolio.vercel.app/",
    siteName: "Nikhil Sai Portfolio",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Nikhil Sai Ankilla Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Sai Ankilla | Full-Stack Developer",
    description: "Full-Stack Developer specializing in React, Next.js, Node.js, MySQL, and Tailwind CSS. Explore my portfolio and projects.",
    creator: "@NikhilsaiAnkil1", 
    images: ["/thumbnail.png"], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full min-h-screen bg-light-primary dark:bg-dark-primary transition-all duration-300 ease-out`}
      >
        <Toaster />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
