"use server";

import { sendEmailClient } from "@/services/sendMail";
import { generateEmailHtmlForAuthor, generateEmailHtmlForClient } from "./utils";
import { adminDatabase } from "./firebaseAdmin";

export async function submitContactForm(formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "All fields are required" };
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { error: "Invalid email format" };
    }

    try {
        const htmlForClient = generateEmailHtmlForClient(name, message);
        const htmlForAuthor = generateEmailHtmlForAuthor(name, email, message)
        await sendEmailClient("nikhilsaiankilla@gmail.com", "Message From Portfolio", htmlForAuthor)
        await sendEmailClient(email, "Thanks For Reaching Out", htmlForClient)
        return { success: "Message sent successfully!" };
    } catch (error) {
        console.log(error);
        return { error: "something went wrong" }
    }
}

export async function getResume() {
    try {
        const snapshot = await adminDatabase.collection('resume').limit(1).get(); // fetch the first doc
        if (snapshot.empty) {
            return { success: false };
        }

        const doc = snapshot.docs[0];
        const data = doc.data();

        return { success: true, resumeUrl: data?.url || null };
    } catch (error) {
        console.error("Error fetching resume:", error);
        return { success: false };
    }
}
