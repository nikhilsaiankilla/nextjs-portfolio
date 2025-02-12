import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ArrowRight, Copy, DownloadIcon, GithubIcon, Linkedin, LinkedinIcon, MapPin, PhoneCall, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NextPageBtn from "@/components/NextPageBtn";
import Skill from "@/components/Skill";
import Certificate from "@/components/Certificate";
import Education from "@/components/Education";
import Article from "@/components/Article";
import ContactForm from "@/components/ContactForm";
import Time from "@/components/Time";

export default function Home() {

  return (
    <div className="w-full px-5 md:px-24 lg:px-96 py-10">
      <Navbar />
      <section id="intro" className="w-full flex items-center md:items-end justify-center flex-col md:flex-row md:justify-between mt-16 border-b-[0.9px] border-[#363636] pb-4">
        <div className="flex items-center flex-col md:flex-row gap-4">
          <div>
            <Image src="https://avatars.githubusercontent.com/u/109269825?v=4"
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
          <Button title="Download CV" icon={<DownloadIcon size={17} />} destination="/resume" />
        </div>
      </section>

      <div className="w-full flex flex-col items-center sm:flex-row justify-center sm:justify-between pt-4">
        <span className="mail text-sm">
          <Copy size={15} /> nikhilsaiankilla@gmail.com
        </span>

        <div className="flex gap-5">
          <Link href='www.linkedin.com' className="flex gap-1 items-center text-sm text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-all duration-150 ease-in-out">
            <Linkedin size={15} /> Linkedin
          </Link>
          <Link href='www.linkedin.com' className="flex gap-1 items-center text-sm text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-all duration-150 ease-in-out">
            <TwitterIcon size={15} /> Twitter
          </Link>
        </div>
      </div>

      <section id="about" className="w-full mt-10 md:mt-20">
        <h2 className="section-title">About me</h2>
        <p className="text-description mt-2 sm:mt-4 md:mt-6">Hello, I'm John Smith, a web designer with 15 years of expertise in crafting visually stunning and user-friendly digital experiences.</p>
        <p className="text-description mt-2 sm:mt-4 md:mt-6">My journey in web design began with a curiosity for how websites work and a desire to create something meaningful on the digital canvas. Over the years, I've honed my skills in user interface design, front-end development, and user experience optimization.</p>
      </section>

      <NextPageBtn destination="/about" title="Discover My Story" icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />} />

      <section id="projects" className="w-full mt-5">
        <div className="flex items-center justify-between">
          <h2 className="section-title my-5">some of my projects</h2>
          <NextPageBtn title="view more projects" icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          <Project />
          <Project />
        </div>

      </section>

      <section id="stack" className="w-full mt-7">
        <h2 className="section-title my-4">Stack</h2>
        <div className="w-full grid grid-cols-3 sm:grid-cols-6 md:grid-cols-7 gap-2 sm:gap-4 md:gap-6">

          {
            Array.from({ length: 15 }).map((i) => (<Skill />))
          }

        </div>
      </section>

      <section id="education">
        <h2 className="section-title my-4">Education</h2>
        <div className="w-full flex flex-col gap-4">
          <Education />
          <Education />
        </div>
      </section>

      <section id="certificates">
        <h2 className="section-title my-4">Certifications</h2>
        <ul className="w-full flex flex-col gap-7">
          <Certificate />
          <Certificate />
          <Certificate />
        </ul>
      </section>

      <section id="blog" className="blog">
        <div className="w-full flex items-center justify-between">
          <h2 className="section-title my-4">Articles & publications</h2>
          <NextPageBtn title="view more posts" icon={<ArrowRight size={14} className="group-hover:-rotate-45 transition-all duration-200 ease-in-out" />} />
        </div>

        <div className="w-full flex flex-col gap-5">
          {Array.from({ length: 3 }).map((i) => <Article />)}
        </div>
      </section>

      <section id="contact">
        <div className="w-full pb-4">
          <h2 className="section-title my-4">Let's talk</h2>
          <div className="w-full border-l-[0.8px] border-[#363636] pl-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full flex flex-col justify-around gap-4">
              <div className="flex gap-2 items-center">
                <p className="text-lg text-light-secondary dark:text-dark-secondary font-normal capitalize">Time for me:</p>
                <Time />
              </div>

              <div>
                <p className="text-lg font-normal capitalize">Email:</p>
                <span className="mail">
                  <Copy size={15} /> nikhilsaiankilla@gmail.com
                </span>
              </div>

              <div>
                <p className="text-lg font-normal capitalize">Socials:</p>
                <ul className="flex flex-col gap-3 mt-3">
                  <Link href="#" target="_blank"><span className="contact-links"><TwitterIcon size={15} /> Twitter</span></Link>
                  <Link href="#" target="_blank"><span className="contact-links"><GithubIcon size={15} /> Github</span></Link>
                  <Link href="#" target="_blank"><span className="contact-links"><LinkedinIcon size={15} /> Linkedin</span></Link>
                </ul>
              </div>
            </div>

            <div className="w-full">
              <p>Reach out:</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full border-t-[0.7px] border-[#363636] mt-10 py-4 flex flex-col md:flex-row justify-center items-center md:justify-between">
          <p className="text-sm">Developed by nikhil sai ankilla</p>
          <span className="flex items-center text-sm">&copy; copyright 2025</span>
      </footer>
    </div>
  );
}
