import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ArrowRight, DownloadIcon, Linkedin, MapPin, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NextPageBtn from "@/components/NextPageBtn";
import Skill from "@/components/Skill";
import Certificate from "@/components/Certificate";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import CopyEmail from "@/components/CopyEmail";
import { FETCH_ALL_SKILLS, FETCH_LATEST_RESUME } from "@/lib/quaries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import ProjectSection from "@/components/ProjectSection";
import ArticleSection from "@/components/ArticleSection";

export default async function Home() {
  const { data: resume } = await sanityFetch({ query: FETCH_LATEST_RESUME })
  const { data: skills } = await sanityFetch({ query: FETCH_ALL_SKILLS })
  return (
    <div className="w-full px-5 md:px-24 lg:px-96 py-10">
      <ThemeSwitcher />
      <Navbar />
      <section id="intro" className="w-full flex items-center md:items-end justify-center flex-col md:flex-row md:justify-between mt-16 border-b-[0.9px] border-[#363636] pb-4">
        <div className="flex items-center flex-col md:flex-row gap-4">
          <div>
            <Image src="/nikhil.webp"
              width={140}
              height={140}
              alt="user image"
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-1 items-center md:items-start">
            <h1 className="text-light-accent dark:text-dark-accent text-2xl font-bold capitalize">Nikhil sai ankilla</h1>
            <h2 className="text-light-secondary dark:text-dark-secondary text-lg capitalize font-normal">Full Stack Developer</h2>
            <h4 className="text-light-secondary dark:text-dark-secondary text-sm flex items-center gap-1"><MapPin size={15} />Hyderabad, India</h4>

            <p className="text-light-secondary dark:text-dark-secondary text-xs flex items-center gap-2"><div className="w-2 h-2 bg-[#00ff3c] rounded-full"></div>Available for work</p>
          </div>
        </div>
        <div className="mt-2 md:mt-0">
          <Button title="Download CV" icon={<DownloadIcon size={17} />} destination={resume?.resumeUrl} />
        </div>
      </section>

      <div className="w-full flex flex-col items-center sm:flex-row justify-center sm:justify-between pt-4">
        <span className="mail text-sm">
          <CopyEmail />
        </span>

        <div className="flex gap-5">
          <Link href='https://www.linkedin.com/in/nikhilsaiankilla/' target="_blank" className="flex gap-1 items-center text-sm text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-all duration-150 ease-in-out">
            <Linkedin size={15} /> Linkedin
          </Link>
          <Link href='https://x.com/NikhilsaiAnkil1' target="_blank" className="flex gap-1 items-center text-sm text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-all duration-150 ease-in-out">
            <TwitterIcon size={15} /> Twitter
          </Link>
        </div>
      </div>

      <section id="about" className="w-full mt-7 md:mt-20">
        <h2 className="section-title">About me</h2>
        <p className="text-description text-sm mt-2 sm:mt-4 md:mt-6">I’m Nikhil Sai Ankilla, a Full-Stack Developer who loves turning ideas into powerful, user-friendly web applications. My coding journey started with a simple “What if I build this?” moment—fast forward to today, and I’m deep into crafting seamless UIs with React and Next.js, optimizing backends with Node.js and MySQL, and debugging my way through problems that keep me up at night (in the best way possible).</p>
        <p className="text-description text-sm mt-2 sm:mt-4 md:mt-6">I’ve built projects like TrackMyJob, a job-tracking tool that helps job seekers stay organized, and Pitch Point, a platform for startup founders to showcase their ideas. When I’m not coding, you’ll find me reading, playing cricket, engaging with the dev community on Twitter, or attending tech events. I believe great products are built through collaboration, curiosity, and just the right amount of caffeine—let’s build something awesome together.</p>
      </section>

      <NextPageBtn destination="/about" title="Discover My Story" icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />} />

      <section id="projects" className="w-full my-10">
        <div className="flex items-center justify-between">
          <h2 className="section-title my-5">some of my projects</h2>
          <NextPageBtn
            title="view more projects"
            destination="/projects"
            icon=
            {
              <ArrowRight size={14}
                className="group-hover:-rotate-45 transition-all duration-200 ease-in-out"
              />}
          />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <ProjectSection />
        </div>

      </section>

      <section id="stack" className="w-full  my-10">
        <h2 className="section-title my-4">Stack</h2>
        <div className="w-full grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 gap-2 sm:gap-4 md:gap-6">

          {skills && skills.length > 0 ? (
            skills.map((skill: any) => <Skill key={skill._id} skill={skill} />)
          ) : (
            <p className="text-light-secondary dark:text-dark-secondary">No skills available.</p>
          )}

        </div>
      </section>

      <section id="education" className="my-10">
        <EducationSection />
      </section>

      <section id="certificates" className="my-10">
        <h2 className="section-title my-4">Certifications</h2>
        <ul className="w-full flex flex-col gap-7">
          <Certificate title="NodeJs - The Complete Guide" company="Udemy 2024" link="https://www.udemy.com/certificate/UC-62f3ce9f-6920-4735-8fb3-c64b6d674fc4/" />
          <Certificate title="ReactJs - The Complete Guide" company="Udemy 2024" link="https://www.udemy.com/certificate/UC-ad1c2ac7-1c52-4267-8b37-af561204277d/" />
          <Certificate title="The Complete Web Development" company="Udemy 2024" link="https://www.udemy.com/certificate/UC-2065797f-70c0-4ea6-a341-b149dc0bd22d/" />
        </ul>
      </section>

      <section id="blog" className="blog  my-10">
        <div className="w-full flex items-center justify-between">
          <h2 className="section-title my-4">Articles & publications</h2>
          <NextPageBtn destination="/articles" title="View More Posts" icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />} />
        </div>

        <div className="w-full flex flex-col gap-5">
          <ArticleSection />
        </div>
      </section>


      <section id="contact">
        <ContactSection />
      </section>

      <footer className="w-full border-t-[0.7px] border-[#363636] mt-10 py-4 flex flex-col md:flex-row justify-center items-center md:justify-between">
        <p className="text-sm">Developed by nikhil sai ankilla</p>
        <span className="flex items-center text-sm">&copy; copyright 2025</span>
      </footer>
      <SanityLive />
    </div>
  );
}
