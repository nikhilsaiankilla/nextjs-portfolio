import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
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
import ExperienceSection from "@/components/ExperienceSection";
import { FETCH_ALL_SKILLS, FETCH_ARTICLES_LIMITED, FETCH_LATEST_RESUME, FETCH_PROJECTS_LIMITED } from "@/lib/quaries";

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
    <main className="w-full px-5 md:px-24 lg:px-96 py-10" aria-label="Main content">

      {/* Theme Switcher */}
      <div aria-label="Theme switcher">
        <ThemeSwitcher />
      </div>

      {/* Navbar */}
      <header aria-label="Main navigation">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section
        id="intro"
        className="w-full flex items-center md:items-end justify-center flex-col md:flex-row md:justify-between mt-16 border-b-[0.9px] border-[#363636] pb-4"
        aria-label="Intro section"
      >
        <div className="flex items-center flex-col md:flex-row gap-4">
          <div className="w-fit rounded-lg transition-all duration-300">
            <Image
              src="/nikhil.jpg"
              width={140}
              height={140}
              alt="Portrait of Nikhil Sai Ankilla, Full Stack Developer"
              className="rounded-lg"
              priority
            />
          </div>

          <div className="flex flex-col gap-1 items-center md:items-start">
            <h1 className="text-light-accent dark:text-dark-accent text-2xl font-bold capitalize">
              Nikhil Sai Ankilla
            </h1>
            <h2 className="text-light-secondary dark:text-dark-secondary text-lg capitalize font-normal">
              Full Stack Developer
            </h2>
            <p className="text-light-secondary dark:text-dark-secondary text-sm flex items-center gap-1" aria-label="Location">
              <MapPin size={15} />
              Hyderabad, India
            </p>
            <p className="text-light-secondary dark:text-dark-secondary text-xs flex items-center gap-2" aria-label="Availability">
              <span className="w-2 h-2 bg-[#00ff3c] rounded-full" aria-hidden="true"></span>
              Available for work
            </p>
          </div>
        </div>

        <div className="mt-2 md:mt-0">
          <DownloadResumeBtn resume={resume?.resumeUrl} />
        </div>
      </section>

      {/* Social Links & Email */}
      <section className="w-full flex flex-col items-center sm:flex-row justify-center sm:justify-between pt-4" aria-label="Contact section">
        <span className="mail text-sm" aria-label="Email">
          <CopyEmail />
        </span>

        <nav className="flex gap-5" aria-label="Social links">
          <Link
            href="https://www.linkedin.com/in/nikhilsaiankilla/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex gap-1 items-center text-sm text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-all duration-150 ease-in-out"
          >
            <Linkedin size={15} />
            LinkedIn
          </Link>
          <Link
            href="https://x.com/NikhilsaiAnkil1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="flex gap-1 items-center text-sm text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-all duration-150 ease-in-out"
          >
            <TwitterIcon size={15} />
            Twitter
          </Link>
        </nav>
      </section>

      {/* About Me */}
      <section id="about" className="w-full mt-7 md:mt-20" aria-label="About me">
        <h2 className="section-title">About Me</h2>
        <p className="text-description text-sm mt-2 sm:mt-4 md:mt-6">
          I’m Nikhil Sai Ankilla, a Full-Stack Developer who loves turning ideas into powerful, user-friendly web applications...
        </p>
        <p className="text-description text-sm mt-2 sm:mt-4 md:mt-6">
          I’ve built projects like TrackMyJob, Pitch Point, and more. When I’m not coding, you’ll find me reading, playing cricket...
        </p>
      </section>

      {/* Call to action */}
      <NextPageBtn
        destination="/about"
        title="Discover My Story"
        icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />}
      />

      <ExperienceSection />
      {/* Projects, Skills, Education */}
      <ProjectSection projects={projects} />
      <SkillSection skills={skills} />
      <EducationSection />

      {/* Certifications */}
      <section id="certificates" className="my-10" aria-label="Certifications">
        <h2 className="section-title my-4">Certifications</h2>
        <ul className="w-full flex flex-col gap-7">
          <Certificate
            title="NodeJs - The Complete Guide"
            company="Udemy 2024"
            link="https://www.udemy.com/certificate/UC-62f3ce9f-6920-4735-8fb3-c64b6d674fc4/"
          />
          <Certificate
            title="ReactJs - The Complete Guide"
            company="Udemy 2024"
            link="https://www.udemy.com/certificate/UC-ad1c2ac7-1c52-4267-8b37-af561204277d/"
          />
          <Certificate
            title="The Complete Web Development"
            company="Udemy 2024"
            link="https://www.udemy.com/certificate/UC-2065797f-70c0-4ea6-a341-b149dc0bd22d/"
          />
        </ul>
      </section>

      {/* Blogs / Articles */}
      <ArticleSection posts={posts} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="w-full border-t-[0.7px] border-[#363636] mt-10 py-4 flex flex-col md:flex-row justify-center items-center md:justify-between" aria-label="Footer">
        <p className="text-sm">Developed by Nikhil Sai Ankilla</p>
        <span className="flex items-center text-sm">
          &copy; copyright 2025
        </span>
      </footer>

      {/* Live Sanity Sync */}
      <SanityLive />
    </main>
  );
}
