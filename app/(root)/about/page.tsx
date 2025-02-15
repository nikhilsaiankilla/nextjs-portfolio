import BackBtn from '@/components/BackBtn'
import ContactSection from '@/components/ContactSection'
import EducationSection from '@/components/EducationSection'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import React from 'react'

const page = () => {
  return (
    <div className='page'>
      <BackBtn />
      <ThemeSwitcher />
      <div className='w-full'>
        <h2 className='section-title text-lg'>About me</h2>

        <div className='text-description text-sm my-5 flex flex-col gap-5'>
          <p>I’m <strong className='text-light-accent dark:text-dark-accent'>Nikhil Sai Ankilla, a Full-Stack Developer</strong> with a passion for building scalable and user-friendly web applications. My journey into coding started with a simple curiosity—"What if I build this?"—which quickly turned into late-night debugging sessions, endless lines of code, and an obsession with solving complex problems.</p>

          <p>Like most developers, I learned the hard way that a missing semicolon can turn into a multi-hour existential crisis. But instead of running away, I embraced the challenge. Over time, I mastered <strong className='text-light-accent dark:text-dark-accent'>React</strong>, <strong className='text-light-accent dark:text-dark-accent'>Node.js</strong>, <strong className='text-light-accent dark:text-dark-accent'>MySQL</strong>, <strong className='text-light-accent dark:text-dark-accent'>Next.js</strong>, <strong className='text-light-accent dark:text-dark-accent'>Sanity</strong>, and <strong className='text-light-accent dark:text-dark-accent'>Tailwind CSS</strong>, building high-quality applications that prioritize performance and user experience.</p>

          <p>I have worked on several projects that solve real-world problems. <strong className='text-light-accent dark:text-dark-accent'>TrackMyJob</strong> is a job application tracking tool that helps job seekers stay organized and improve their job search process. <strong className='text-light-accent dark:text-dark-accent'>Pitch Point</strong> is a Next.js-powered platform for startup founders to showcase their ideas. I also run a personal blog where I share insights on web development, debugging nightmares, and my journey as a developer.</p>

          <p>My expertise spans both front-end and back-end development. I specialize in crafting interactive and accessible user interfaces with React and Next.js, while also developing robust APIs and scalable architectures using Node.js, Express, and Strapi. With MySQL, I design optimized database solutions that ensure efficient data handling. Whether it's building a new feature, fixing a stubborn bug, or optimizing performance, I love the process of breaking down problems and finding the best possible solutions.</p>

          <p>Beyond coding, I enjoy watching and playing <strong className='text-light-accent dark:text-dark-accent'>cricket</strong>, <strong className='text-light-accent dark:text-dark-accent'>reading books</strong>, and engaging with the developer community on <strong className='text-light-accent dark:text-dark-accent'>Twitter</strong>. I regularly attend technical events to stay updated with industry trends and connect with like-minded professionals. When I’m not immersed in tech, you’ll probably find me hanging out with friends and family, unwinding from the latest debugging marathon.</p>

          <p>I am always looking for opportunities to collaborate on innovative projects, contribute to open-source, or join a dynamic team that values creativity and growth. If you're a recruiter, hiring manager, or fellow developer, let's connect and build something impactful together.</p>

          <p>Building scalable apps and <strong className='text-light-accent dark:text-dark-accent'>debugging life</strong>, one <strong className='text-light-accent dark:text-dark-accent'>console.log</strong> at a time.</p>
        </div>

        <div className='w-full'>
          <EducationSection />
        </div>

        <ContactSection />
      </div>
    </div>
  )
}

export default page