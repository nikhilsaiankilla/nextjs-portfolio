"use client";
import { submitContactForm } from "@/lib/actions";
import React, { ReactNode, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { ArrowRight, Github, Linkedin, Loader2, Mail, Star, Twitter } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";
import CopyEmail from "./CopyEmail";

const ContactForm = () => {
    const [state, formAction] = useFormState<{ error: string | null; success: string | null }>(
        async (_prevState, formData: FormData) => submitContactForm(formData),
        { error: null, success: null }
    );

    useEffect(() => {
        if (!state) return;

        if (state.success) {
            toast({
                title: "Success!",
                description: state.success,
            });
        } else if (state.error) {
            toast({
                title: "Failed to send message",
                description: state.error,
                variant: "destructive",
            });
        }
    }, [state]);

    return (
        <div className="w-full">
            <h4 className="font-semibold text-base md:text-lg mb-5">Reach Out</h4>
            <form action={formAction} className="w-full flex flex-col gap-5" aria-live="polite">
                <div className="flex flex-col">
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        className="w-full p-3 rounded-lg border border-black bg-transparent focus:outline-none focus:ring-2 focus:ring-black/50"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email address"
                        className="w-full p-3 rounded-lg border border-black bg-transparent focus:outline-none focus:ring-2 focus:ring-black/50"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows={5}
                        className="w-full p-3 rounded-lg border border-black bg-transparent focus:outline-none focus:ring-2 focus:ring-black/50"
                        required
                    ></textarea>
                </div>

                <SubmitButton />
            </form>

            <div className="flex items-center w-full my-6">
                <hr className="border-t border-dashed border-black/20 flex-grow" />
                <span className="mx-4 text-gray-500">
                    <Star size={20} />
                </span>
                <hr className="border-t border-dashed border-black/20 flex-grow" />
            </div>

            <div className="w-full mt-6">
                <p className="font-semibold text-base md:text-lg mb-5">Or connect with me here:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <SocialLink
                        icon={<Twitter size={20} />}
                        href="https://x.com/NikhilsaiAnkil1"
                        label="@NikhilsaiAnkil1"
                    />
                    <SocialLink
                        icon={<Linkedin size={20} />}
                        href="https://www.linkedin.com/in/nikhilsaiankilla/"
                        label="@nikhilsaiankilla"
                    />
                    <SocialLink
                        icon={<Github size={20} />}
                        href="https://github.com/nikhilsaiankilla"
                        label="@nikhilsaiankilla"
                    />
                    <CopyEmail />
                </div>
            </div>

            <p className="text-sm text-gray-700 mt-6 text-center">
                Hyderabad — my hometown
            </p>
        </div>
    );
};

const SocialLink = ({ icon, href, label }: { icon: ReactNode, href: string, label: string }) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-lg border border-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white group"
            aria-label={`Visit my ${label} profile`}
        >
            <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
                {icon}
            </div>
            <span className="font-semibold text-base">{label}</span>
        </Link>
    );
};

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="w-full py-3 mt-2 rounded-lg bg-black text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:bg-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed"
            disabled={pending}
            aria-disabled={pending}
        >
            {pending ? (
                <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                </>
            ) : (
                <>
                    Send Message
                    <ArrowRight size={18} className="transition-transform duration-200 ease-in-out group-hover:rotate-45" />
                </>
            )}
        </button>
    );
};

export default ContactForm;