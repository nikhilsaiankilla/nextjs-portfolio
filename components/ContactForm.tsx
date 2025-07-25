"use client";
import { submitContactForm } from "@/lib/actions";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
    const { toast } = useToast();
    const [state, formAction] = useFormState<{ error: string | null; success: string | null }>(
        async (_prevState, formData: FormData) => submitContactForm(formData),
        { error: null, success: null }
    );

    useEffect(() => {
        if (!state) return;

        if (state.success) {
            toast({
                title: "Success",
                description: state.success,
                variant: "default",
            });
        } else if (state.error) {
            toast({
                title: "Failed",
                description: state.error,
                variant: "destructive",
            });
        }
    }, [state, toast]);

    return (
        <form action={formAction} className="w-full flex flex-col gap-5 mt-5" aria-live="polite">
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    className="contact-input px-4 py-3"
                    required
                    aria-required="true"
                    aria-describedby="name-desc"
                />
                <small id="name-desc" className="sr-only">Enter your full name</small>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email address"
                    className="contact-input px-4 py-3"
                    required
                    aria-required="true"
                    aria-describedby="email-desc"
                />
                <small id="email-desc" className="sr-only">Enter a valid email address</small>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows={5}
                    className="contact-input px-4 py-3"
                    required
                    aria-required="true"
                    aria-describedby="message-desc"
                ></textarea>
                <small id="message-desc" className="sr-only">Type your message here</small>
            </div>

            <SubmitButton />
        </form>
    );
};

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="w-full py-2 text-center bg-light-accent dark:bg-dark-accent text-light-primary dark:text-dark-primary rounded-md disabled:opacity-70"
            disabled={pending}
            aria-disabled={pending}
        >
            {pending ? "Sending..." : "Send Message"}
        </button>
    );
};

export default ContactForm;
