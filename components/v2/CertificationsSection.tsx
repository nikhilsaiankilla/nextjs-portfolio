import React from 'react';
import { Award, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// This is the component for a single certificate entry
const CertificateEntry = ({ title, company, link }: { title: string, company: string, link: string }) => {
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border-2 border-transparent transition-all duration-300 ease-in-out hover:border-black group">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col">
                    <h3 className="text-lg md:text-xl font-semibold text-black">{title}</h3>
                    <p className="text-sm font-medium text-gray-700">{company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                    <ArrowUpRight
                        size={20}
                        className="text-black transition-transform duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                </div>
            </div>
        </Link>
    );
};

// This is the main section component that renders the entries
const CertificationsSection = () => {
    return (
        <section
            id="certificates"
            className="w-full my-16"
            aria-labelledby="certificates-heading"
        >
            <h2 id="certificates-heading" className="text-3xl font-bold flex items-center gap-3 mb-10">
                <Award size={24} />
                Certifications
            </h2>

            <div className="w-full grid grid-cols-1 gap-4">
                <CertificateEntry
                    title="NodeJs - The Complete Guide"
                    company="Udemy 2024"
                    link="https://www.udemy.com/certificate/UC-62f3ce9f-6920-4735-8fb3-c64b6d674fc4/"
                />
                <CertificateEntry
                    title="ReactJs - The Complete Guide"
                    company="Udemy 2024"
                    link="https://www.udemy.com/certificate/UC-ad1c2ac7-1c52-4267-8b37-af561204277d/"
                />
                <CertificateEntry
                    title="The Complete Web Development"
                    company="Udemy 2024"
                    link="https://www.udemy.com/certificate/UC-2065797f-70c0-4ea6-a341-b149dc0bd22d/"
                />
            </div>
        </section>
    );
};

export default CertificationsSection;