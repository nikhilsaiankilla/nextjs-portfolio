import React from 'react';
import ContactForm from './ContactForm';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Time from './Time';
import Link from 'next/link';
import CopyEmail from './CopyEmail';

const ContactSection = () => {
    return (
        <section id="contact" aria-labelledby="contact-heading" className="w-full pb-4 mt-10">
            <h2 id="contact-heading" className="section-title my-4">
                Let's talk
            </h2>

            <div className="w-full border-l-[0.8px] border-[#363636] pl-3 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Left Side: Contact Details */}
                <div className="w-full flex flex-col justify-around gap-4">
                    {/* Time */}
                    <div className="flex gap-2 items-center" aria-label="Current local time">
                        <p className="text-lg text-light-secondary dark:text-dark-secondary font-normal capitalize">
                            Time for me:
                        </p>
                        <Time />
                    </div>

                    {/* Email */}
                    <div>
                        <p className="text-lg font-normal capitalize">Email:</p>
                        <address className="not-italic">
                            <CopyEmail />
                        </address>
                    </div>

                    {/* Social Links */}
                    <div>
                        <p className="text-lg font-normal capitalize">Socials:</p>
                        <ul className="flex flex-col gap-3 mt-3" aria-label="Social media links">
                            <li>
                                <Link
                                    href="https://x.com/NikhilsaiAnkil1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit Twitter profile"
                                    className="contact-links"
                                >
                                    <TwitterIcon size={15} /> Twitter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/nikhilsaiankilla"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit GitHub profile"
                                    className="contact-links"
                                >
                                    <GithubIcon size={15} /> GitHub
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.linkedin.com/in/nikhilsaiankilla/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit LinkedIn profile"
                                    className="contact-links"
                                >
                                    <LinkedinIcon size={15} /> LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="w-full">
                    <p className="mb-2 text-lg font-medium">Reach out:</p>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
