import Link from 'next/link';
import { Briefcase, ArrowUpRight } from 'lucide-react';

const ExperienceSection = () => {
    const experienceData = [
        {
            company: 'Hussaini Welfare Association',
            link: 'https://hussainiwelfareassociation.in',
            role: 'Freelance Full Stack Developer',
            duration: 'Remote · Feb 2025 – June 2025',
            description: 'Collaborated with the Hussaini Welfare Association to build a secure, scalable digital platform to manage member operations and donations.',
            bullets: [
                'Digitized workflows for 500+ members, reducing manual operations by 60%.',
                'Implemented role-based access control for four distinct user tiers.',
                'Designed scalable Firestore schema and secure auth with Firebase and token management.',
                'Built internal dashboards to track donations, event participation, attendance, and feedback.',
                'Integrated Recharts for visualizing donation patterns and engagement insights.',
                'Developed a cron-based notification system for event reminders, boosting turnout by 40%.',
                'Enabled expense tracking and analytics, reducing manual financial logging by 70%.',
            ],
        },
        {
            company: 'PurpleDry',
            link: 'https://purpledry.in',
            role: 'Freelance Full Stack Developer',
            duration: 'Remote · May 2024 – Present',
            description: 'Leading the development of an end-to-end laundry management platform aimed at streamlining operations and improving customer experience.',
            bullets: [
                'Designed and developed a modern, responsive landing page focused on user acquisition and brand trust.',
                'Built and maintained a powerful admin panel with functionality to manage employee data, pickup zones, coupons, gallery images, and order workflows.',
                'Led a cross-functional team of 4, guiding feature planning, task breakdown, and code reviews.',
                'Integrated real-time analytics to visualize monthly revenue, zone-wise performance, and city-based service usage.',
                'Ensured scalable architecture using Next.js, Firebase, and Tailwind CSS with clean code and reusable components.',
                'Focused on admin UX, data accuracy, and platform reliability to support daily business operations.',
            ],
        },
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
                        <Link href={job.link} target="_blank" className="group flex items-center gap-2">
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