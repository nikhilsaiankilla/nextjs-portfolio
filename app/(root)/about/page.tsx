import BackBtn from '@/components/BackBtn';
import ContactSection from '@/components/ContactSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/v2/ExperienceSection';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Nikhil Sai Ankilla — a Full Stack Developer skilled in building scalable, performant, and user-centric web applications using Next.js, React, Node.js, and TypeScript.',
  keywords: [
    'About Nikhil',
    'About Nikhil Sai Ankilla',
    'Nikhil Full Stack Developer',
    'Developer Bio',
    'Portfolio About',
    'Next.js Developer India',
  ],
  openGraph: {
    title: 'About | Nikhil Sai Ankilla',
    description:
      'Get to know Nikhil — a self-taught full stack developer building modern web apps with Next.js, TypeScript, and more.',
    url: 'https://nikhilsaiportfolio.vercel.app/about',
    siteName: 'Nikhil Sai Ankilla Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Nikhil Sai Ankilla - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Nikhil Sai Ankilla',
    description:
      'Learn more about Nikhil — a passionate full stack developer building modern web apps.',
    creator: '@NikhilSaiAnkil1',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: 'https://nikhilsaiportfolio.vercel.app/about',
  },
};

const Page = () => {
  return (
    <div className="page">
      <BackBtn />
      <ThemeSwitcher />
      <div className="w-full">
        <h2 className="section-title text-lg">About Me</h2>

        <div className="prose dark:prose-invert max-w-none my-5 leading-7 text-sm space-y-10">
          <p>
            I’m <strong>Nikhil Sai Ankilla</strong>, a self-taught Full Stack Developer driven by a passion for turning ideas into meaningful digital products. What started as casual curiosity soon evolved into a dedicated journey of mastering web technologies and solving real-world problems.
          </p>

          <p>
            My technical foundation spans both frontend and backend development, where I specialize in building fast, scalable, and accessible applications. I'm proficient in technologies like <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and backend systems using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Firebase</strong>. Whether it’s crafting seamless user interfaces or building resilient APIs, I focus on performance, maintainability, and user experience.
          </p>

          <p>
            Over the years, I’ve worked on impactful projects and freelance engagements such as:
          </p>

          <ul className='space-y-4'>
            <li>
              <strong className='text-light-accent'>JobNextly</strong>
              <p>
                — A full-stack job tracking platform that helps users manage their job applications, gain insights, and stay organized throughout their job search.
              </p>
            </li>
            <li>
              <strong className='text-light-accent'>Pitch Point</strong>
              <p>— A polished Next.js-based platform that enables startup founders to present their pitches, validate ideas, and share updates with potential investors.
              </p>
            </li>
            <li>
              <strong className='text-light-accent'>PurpleDry</strong>
              <p>— As a freelance developer, I led the development of a laundry service platform, designing the landing page, managing a small team, and building an admin panel for staff, orders, coupons, and analytics.
              </p>
            </li>
            <li>
              <strong className='text-light-accent'>Hussaini Welfare Association</strong>
              <p>— Built a secure donation platform with PDF receipt generation, role-based access, event reminders, dashboards, and analytics, improving operational efficiency and user engagement.
              </p>
            </li>
          </ul>

          <p>
            Beyond building products, I also enjoy writing, mentoring, and contributing to the developer community. I actively share insights, tutorials, and reflections on platforms like Twitter and through my blog.
          </p>

          <p>
            When I’m not immersed in code, I’m probably playing a game of <strong>cricket</strong>, exploring new books, or engaging in thought-provoking discussions with friends and fellow devs. I also love attending tech meetups and staying up to date with industry trends.
          </p>

          <p>
            I’m always open to collaborations, freelance work, and full-time opportunities where I can make an impact. If you're building something meaningful, I’d love to be part of it.
          </p>

          <blockquote>
            Building scalable apps and debugging life — one <code>console.log</code> at a time.
          </blockquote>
        </div>

        <div className="w-full">
          <ExperienceSection />
        </div>

        <div className="w-full">
          <EducationSection />
        </div>

        <ContactSection />
      </div>
    </div>
  );
};

export default Page;
