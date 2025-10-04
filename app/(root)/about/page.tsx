import BackBtn from '@/components/BackBtn';
import ContactSection from '@/components/ContactSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/v2/ExperienceSection';
import Link from 'next/link';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Nikhil Sai Ankilla — a Software Development Engineer passionate about building scalable and user-focused web applications.',
  openGraph: {
    title: 'About | Nikhil Sai Ankilla',
    description:
      'Discover Nikhil — a full stack engineer focused on building scalable, reliable, and user-centric systems using modern technologies like Next.js, Node.js, and AWS.',
    url: 'https://nikhilsaiankilla.blog/about',
    siteName: 'Nikhil Sai Ankilla Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Nikhil Sai Ankilla - Software Development Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Nikhil Sai Ankilla',
    description:
      'Learn more about Nikhil — a full stack developer crafting scalable systems and performant web applications.',
    creator: '@NikhilSaiAnkil1',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: 'https://nikhilsaiankilla.blog/about',
  },
};

const Page = () => {
  return (
    <div className="w-full px-5 md:px-24 lg:px-52 bg-[#F0F1F3]">
      <div className="mt-16 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          My Story
        </h1>
        <p className="text-muted-foreground text-sm">
          Thoughts, experiments, and insights on building web apps, learning new technologies, and exploring creative ideas.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none my-5 leading-7 text-sm space-y-6">
        <p className='text-sm md:text-lg'>
          I’m Nikhil Sai Ankilla, a Software Development Engineer passionate about building scalable, efficient, and user-focused web applications. I work across the full stack using JavaScript, TypeScript, Node.js, React.js, and Next.js, with cloud deployments on AWS and Vercel.
        </p>

        <p className='text-sm md:text-lg'>
          My focus is on performance, simplicity, and building resilient systems. I’m experienced in REST APIs, microservices, database optimization, and CI/CD pipelines to deliver production-ready applications.
        </p>

        <p className='text-sm md:text-lg'>
          You can explore my work on the <Link href="/projects" className="text-light-accent underline">Projects</Link> page and read my thoughts on development on the <Link href="/articles" className="text-light-accent underline">Articles</Link> page.
        </p>

        <p className='text-sm md:text-lg'>
          When I’m not coding, I enjoy cricket, reading, and discussing tech and product ideas with peers. I thrive on learning, collaborating, and creating meaningful software.
        </p>

        <blockquote className='text-sm md:text-lg'>
          Building scalable apps and debugging life — one <code>console.log</code> at a time.
        </blockquote>
      </div>

      <div className="w-full">
        <ExperienceSection />
      </div>

      <div className="w-full">
        <EducationSection />
      </div>

      <div className="mt-10">
        <ContactSection />
      </div>
    </div>
  );
};

export default Page;
