import React from 'react'
import ContactForm from './ContactForm'
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import Time from './Time'
import Link from "next/link";
import CopyEmail from './CopyEmail';
const ContactSection = () => {
    return (
        <section id="contact">
            <div className="w-full pb-4 mt-10">
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
                                <CopyEmail />
                            </span>
                        </div>

                        <div>
                            <p className="text-lg font-normal capitalize">Socials:</p>
                            <ul className="flex flex-col gap-3 mt-3">
                                <Link href="https://x.com/NikhilsaiAnkil1" target="_blank"><span className="contact-links"><TwitterIcon size={15} /> Twitter</span></Link>
                                <Link href="https://github.com/nikhilsaiankilla" target="_blank"><span className="contact-links"><GithubIcon size={15} /> Github</span></Link>
                                <Link href="https://www.linkedin.com/in/nikhilsaiankilla/" target="_blank"><span className="contact-links"><LinkedinIcon size={15} /> Linkedin</span></Link>
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
    )
}

export default ContactSection