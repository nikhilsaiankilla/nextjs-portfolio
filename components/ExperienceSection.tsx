// components/ExperienceSection.tsx

import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
    return (
        <section id="experience" className="my-10" aria-label="Experience">
            <h2 className="section-title my-4 flex items-center gap-2">
                <Briefcase size={20} />
                Experience
            </h2>
            <ul className="w-full flex flex-col gap-7">
                <li className="flex flex-col border-l-[1px] border-[#363636] pl-4 space-y-3">
                    <h3 className="text-base font-semibold text-light-accent">
                        PurpleDry
                    </h3>
                    <h4 className="font-medium text-sm">Freelance Full Stack Developer</h4>
                    <span className="text-xs text-light-secondary dark:text-dark-secondary italic">
                        Remote · May 2024 – Present
                    </span>
                    <p className="text-sm text-description mt-1">
                        Leading the development of an end-to-end laundry management platform aimed at streamlining operations and improving customer experience.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-description">
                        <li>Designed and developed a modern, responsive landing page focused on user acquisition and brand trust.</li>
                        <li>Built and maintained a powerful admin panel with functionality to manage employee data, pickup zones, coupons, gallery images, and order workflows.</li>
                        <li>Led a cross-functional team of 4, guiding feature planning, task breakdown, and code reviews.</li>
                        <li>Integrated real-time analytics to visualize monthly revenue, zone-wise performance, and city-based service usage.</li>
                        <li>Ensured scalable architecture using Next.js, Firebase, and Tailwind CSS with clean code and reusable components.</li>
                        <li>Focused on admin UX, data accuracy, and platform reliability to support daily business operations.</li>
                    </ul>
                </li>


                <li className="flex flex-col border-l-[1px] border-[#363636] pl-4 space-y-3">
                    <h3 className="text-base font-semibold text-light-accent">
                        Hussaini Welfare Association
                    </h3>
                    <h4 className="font-medium text-sm">Freelance Full Stack Developer</h4>
                    <span className="text-xs text-light-secondary dark:text-dark-secondary italic">
                        Remote · May 2025 – June 2025
                    </span>
                    <p className="text-sm text-description mt-1">
                        Collaborated with the Hussaini Welfare Association to build a secure, scalable digital platform to manage member operations and donations.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-description">
                        <li>Digitized workflows for 500+ members, reducing manual operations by 60%.</li>
                        <li>Implemented role-based access control for four distinct user tiers.</li>
                        <li>Designed scalable Firestore schema and secure auth with Firebase and token management.</li>
                        <li>Built internal dashboards to track donations, event participation, attendance, and feedback.</li>
                        <li>Integrated Recharts for visualizing donation patterns and engagement insights.</li>
                        <li>Developed a cron-based notification system for event reminders, boosting turnout by 40%.</li>
                        <li>Enabled expense tracking and analytics, reducing manual financial logging by 70%.</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
}
