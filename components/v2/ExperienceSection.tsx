import Link from 'next/link';
import { Briefcase, ArrowUpRight } from 'lucide-react';

const ExperienceSection = () => {
    const experienceData = [
        {
            company: 'Freelancer',
            link: null, // Removed specific client links as it's a combined entry
            role: 'Freelance Full Stack Developer',
            duration: 'Remote · May 2024 – Present', // Combined the earliest start and latest end dates
            description: 'Delivered end-to-end full-stack development services for clients in the non-profit and services sectors, focusing on building scalable digital platforms, internal management tools, and improving operational efficiency.',
            bullets: [
                // From PurpleDry (Focus on platform, team, and business impact)
                'Led the development of a laundry management platform (PurpleDry), building a powerful admin panel with functionality for managing employee data, pickup zones, coupons, and complex order workflows.',
                'Led a cross-functional team of 4, guiding feature planning, task breakdown, and conducting code reviews to ensure platform reliability and scalable architecture using Next.js, Firebase, and Tailwind CSS.',
                'Integrated real-time analytics to visualize monthly revenue, zone-wise performance, and city-based service usage for business intelligence.',
                'Designed and developed a modern, responsive landing page focused on user acquisition and brand trust.',

                // From Hussaini Welfare Association (Focus on non-profit, digitization, and security)
                'Collaborated with the Hussaini Welfare Association to build a secure, scalable digital platform to manage member operations and donations.',
                'Digitized workflows for 500+ members, reducing manual operations by 60% and enabling expense tracking and analytics.',
                'Implemented role-based access control for four distinct user tiers and designed a scalable Firestore schema with secure Firebase auth and token management.',
                'Developed internal dashboards to track donations, event participation, attendance, and feedback, integrating Recharts for visualizing donation patterns.',
                'Developed a cron-based notification system for event reminders, boosting turnout by 40%.',
            ],
        }
    ];

return (
    <section id="experience" className="my-16" aria-label="Experience">
        <h2 className="text-3xl font-bold flex items-center gap-3 mb-10">
            <Briefcase size={24} />
            Experience
        </h2>

        <ul className="grid grid-cols-1 gap-10">
            {experienceData.map((job, index) => (
                <li key={index} className="flex flex-col">
                    <Link href={job.link || '#'} target="_blank" className="group flex items-center gap-2">
                        <h3 className="text-xl md:text-3xl font-bold text-black group-hover:underline group-hover:underline-offset-4">
                            {job.company}
                        </h3>
                        <ArrowUpRight size={20} className="text-black transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                    <h4 className="font-semibold text-base md:text-l mt-2">{job.role}</h4>
                    <span className="text-sm text-gray-600 mt-1">{job.duration}</span>

                    <p className="text-sm mt-8 text-black">{job.description}</p>

                    <ul className="list-disc list-outside pl-5 space-y-2 text-sm md:text-lg text-black mt-4">
                        {job.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex}>{bullet}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    </section>
);
};

export default ExperienceSection;