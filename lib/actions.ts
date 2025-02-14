"use server";

export async function submitContactForm(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "All fields are required" };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Invalid email format" };
  }
  
  console.log("Form Submitted:", { name, email, message });

  return { success: "Message sent successfully!" };
}
