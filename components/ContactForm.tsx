"use client";
import { submitContactForm } from '@/lib/actions';
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom';

const ContactForm = () => {
    const [state, formAction] = useFormState(submitContactForm, {});

    return (
        <form action={formAction} className='w-full flex flex-col gap-5 mt-5' >
            <input
                type="text"
                name="name"
                id="name"
                placeholder='Your name'
                className='contact-input px-4 py-3'
            />
            <input
                type="email"
                name="email"
                id="email"
                placeholder='Your Email address'
                className='contact-input px-4 py-3'
            />
            <textarea
                name="message"
                id="message"
                placeholder='Message'
                rows={5}
                className='contact-input px-4 py-3'
            ></textarea>
            <SubmitButton />
            {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
            {state?.success && <p className="text-green-500 text-sm">{state.success}</p>}
        </form>
    )
}

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="w-full py-2 text-center bg-light-accent dark:bg-dark-accent text-light-primary dark:text-dark-primary rounded-md disabled:bg-opacity-95"
            disabled={pending}
        >
            {pending ? "Sending..." : "Send Message"}
        </button>
    );
};

export default ContactForm