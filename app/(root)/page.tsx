export const revalidate = 60

import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ProjectSection from "@/components/ProjectSection";
import ArticleSection from "@/components/ArticleSection";
import SkillSection from "@/components/SkillSection";
import ExperienceSection from "@/components/v2/ExperienceSection";
import CertificationsSection from "@/components/v2/CertificationsSection";

import { adminDatabase } from "../../lib/firebaseAdmin";
import { Article, Project, Skill } from "@/types";
import { markdownToHtmlText } from "@/lib/utils";

async function getProjects() {
  try {
    const res = await adminDatabase.collection("projects").orderBy("createdAt", "desc").limit(3).get();

    if (res.empty) {
      return [];
    }

    const projects: Project[] = res.docs.map((doc: any) => {
      const data = doc.data();

      return {
        id: doc.id,
        title: data.title,
        image: data.image,
        tagline: data.tagline,
        problem: data.problem,
        description: data.description,
        githubUrl: data.githubUrl,
        demoUrl: data.demoUrl,
        skills: Array.isArray(data.skills) ? data.skills : [],
      }
    })

    return projects;
  } catch (error) {
    console.log("Error fetching projects:", error);
    return [];
  }
}

async function getSkills() {
  try {
    const res = await adminDatabase.collection("skills").get();

    if (res.empty) {
      return [];
    }

    const skills: Skill[] = res.docs.map((doc: any) => {
      const data = doc.data();

      return {
        id: doc.id,
        name: data.name,
        category: data.category,
        image: data.image,
      }
    })

    return skills;
  } catch (error) {
    console.log("Error fetching skills:", error);
    return [];
  }
}

async function getPosts() {
  try {
    const res = await adminDatabase.collection("articles").orderBy("createdAt", "desc").limit(3).get();

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

export default async function Home() {
  let projects: Project[] = [];
  let skills: Skill[] = [];
  let posts: Article[] = [];


  try {
    [projects, skills, posts] = await Promise.all([
      getProjects(),
      getSkills(),
      getPosts(),
    ]);
  } catch (error) {
    console.error("Failed to fetch data from Firestore:", error);
  }

  return (
    <main className="w-full px-5 md:px-24 lg:px-52 bg-[#F0F1F3]" aria-label="Main content">
      {/* Hero Sectio */}
      <section
        id="intro"
        className="w-full min-h-[55vh] flex items-start mt-52 space-y-10 flex-col"
        aria-label="Intro section"
      >
        <h1 className="text-4xl md:text-7xl font-bold">Hi, I'm Nikhil Sai.</h1>
        <p className="text-sm md:text-2xl font-normal">
          Software Development Engineer & Full-Stack Developer. Based in Hyderabad, creating scalable web applications, designing robust systems, and actively seeking new opportunities.
        </p>
      </section>

      <ProjectSection projects={projects} />
      <ExperienceSection />
      <SkillSection skills={skills} />
      <EducationSection />
      <CertificationsSection />
      <ArticleSection posts={posts} />
      <div className="my-16">
        <ContactSection />
      </div>

      <footer className="w-full border-t-[0.7px] border-[#363636] mt-10 py-4 flex flex-col md:flex-row justify-center items-center md:justify-between" aria-label="Footer">
        <p className="text-sm">Developed by Nikhil Sai Ankilla</p>
        <span className="flex items-center text-sm">
          &copy; copyright 2025
        </span>
      </footer>
    </main>
  );
}
