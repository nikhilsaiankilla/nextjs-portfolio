import { ArrowRight, Linkedin, MapPin, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NextPageBtn from "@/components/NextPageBtn";
import Certificate from "@/components/Certificate";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import CopyEmail from "@/components/CopyEmail";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import ProjectSection from "@/components/ProjectSection";
import ArticleSection from "@/components/ArticleSection";
import SkillSection from "@/components/SkillSection";
import DownloadResumeBtn from "@/components/ResumeDownloadBtn";
import ExperienceSection from "@/components/v2/ExperienceSection";
import { FETCH_ALL_SKILLS, FETCH_ARTICLES_LIMITED, FETCH_LATEST_RESUME, FETCH_PROJECTS_LIMITED } from "@/lib/quaries";
import Navbar from "@/components/v2/Navbar";
import CertificationsSection from "@/components/v2/CertificationsSection";

export default async function Home() {

  const [resumeRes, projectsRes, skillsRes, postsRes] = await Promise.all([
    sanityFetch({ query: FETCH_LATEST_RESUME }),
    sanityFetch({ query: FETCH_PROJECTS_LIMITED }),
    sanityFetch({ query: FETCH_ALL_SKILLS }),
    sanityFetch({ query: FETCH_ARTICLES_LIMITED }),
  ]);

  const resume = resumeRes.data;
  const projects = projectsRes.data;
  const skills = skillsRes.data;
  const posts = postsRes.data;

  return (
    <main className="w-full px-5 md:px-24 lg:px-52 bg-[#F0F1F3]" aria-label="Main content">
      <Navbar />

      {/* Hero Section */}
      <section
        id="intro"
        className="w-full min-h-[55vh] flex items-start mt-52 space-y-10 flex-col"
        aria-label="Intro section"
      >
        <h1 className="text-4xl md:text-7xl font-bold">Hi, I'm Nikhil Sai.</h1>

        <p className="text-sm md:text-2xl font-normal">UI/UX Designer & Ambitious Content Creator. Currently, I'm based in the New York City Area, designing responsive websites and leading the creative process at Adspace Agency.</p>
      </section>

      <ExperienceSection />
      {/* Projects, Skills, Education */}
      <ProjectSection projects={projects} />
      <SkillSection skills={skills} />
      <EducationSection />

      <CertificationsSection />

      {/* Blogs / Articles */}
      <ArticleSection posts={posts} />

      {/* Contact Section */}
      <ContactSection />

      {/* Live Sanity Sync */}
      <SanityLive />

      {/* Footer */}
      <footer className="w-full border-t-[0.7px] border-[#363636] mt-10 py-4 flex flex-col md:flex-row justify-center items-center md:justify-between" aria-label="Footer">
        <p className="text-sm">Developed by Nikhil Sai Ankilla</p>
        <span className="flex items-center text-sm">
          &copy; copyright 2025
        </span>
      </footer>
    </main>
  );
}
