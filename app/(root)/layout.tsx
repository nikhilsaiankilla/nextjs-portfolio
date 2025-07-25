import { Analytics } from '@vercel/analytics/react';
import { Poppins } from "next/font/google"; 
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import "@/app/globals.css";
import { Metadata } from 'next';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nikhil Sai Ankilla | Full Stack Developer",
    template: "%s | Nikhil Sai Ankilla",
  },
  description:
    "I'm Nikhil, full stack developer who builds modern web applications using Next.js, React, TypeScript, and more.",
  keywords: [
    "Nikhil",
    "Nikhil Sai Ankilla",
    "Nikhil Ankilla",
    "Sai Ankilla",
    "Nikhil Portfolio",
    "Nikhil Sai Portfolio",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "MERN Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Next.js Portfolio",
    "Developer Portfolio",
    "Software Engineer",
    "Open Source Developer",
    "Indian Developer",
    "Hyderabad Developer",
    "Self-taught Developer",
    "Developer Resume",
    "Tech Resume",
    "Personal Website",
  ],
  metadataBase: new URL("https://nikhilsaiportfolio.vercel.app/"), // replace with your actual domain
  openGraph: {
    title: "Nikhil sai ankilla | Full Stack Developer",
    description:
      "Explore my developer portfolio showcasing projects, skills, and experience in full stack development.",
    url: "https://nikhilsaiportfolio.vercel.app/",
    siteName: "Nikhil sai ankilla Portfolio",
    images: [
      {
        url: "/opengraph-image.png", // Add this to /public
        width: 1200,
        height: 630,
        alt: "Nikhil sai ankilla - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil sai ankilla | Full Stack Developer",
    description:
      "Passionate about building performant and scalable web apps with modern technologies.",
    creator: "@NikhilSaiAnkil1", // optional
    images: ["/opengraph-image.png"],
  },
  authors: [{ name: "Nikhil", url: "https://nikhilsaiportfolio.vercel.app/" }],
  creator: "Nikhil sai ankilla",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://nikhilsaiportfolio.vercel.app/",
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
        className={`${poppins.className} w-full min-h-screen bg-light-primary dark:bg-dark-primary transition-all duration-300 ease-out`}
      >
        <Toaster />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
