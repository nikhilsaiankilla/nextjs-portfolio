import React from 'react';
import ContactForm from './ContactForm';
import Image from 'next/image';

const ContactSection = () => {
    return (
        <section id="contact" aria-labelledby="contact-heading" className="w-full">
            <h2 id="contact-heading" className="text-3xl font-bold flex items-center gap-3 mb-10">
                Let's Talk
            </h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side: Image Placeholder */}
                <div className="w-full">
                    <ContactForm />
                </div>
                {/* Right Side: Contact Form Only */}
                <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                        src="/hyd.jpg"
                        alt="A professional portrait or related visual"
                        width={100}
                        height={100}
                        unoptimized
                        className="rounded-lg h-full w-full aspect-[3/4] object-cover grayscale"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;