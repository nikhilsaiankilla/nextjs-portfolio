import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistanceToNow, isValid, parseISO } from "date-fns";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const reduceSize = (input: string, size: number): string => {
    if (input.length <= size) return input;
    return input.slice(0, size) + "...";
};

export const timeAgo = (dateString: string) => {
    const date = parseISO(dateString);
    if (!isValid(date)) return "Invalid date";
    return formatDistanceToNow(date, { addSuffix: true });
};

export const generateEmailHtmlForClient = (name: string, message: string) => {
    return `<!DOCTYPE html>
<html>
<head>
    <title>Message Received</title>
</head>
<body style="background-color: #F5F5F5; color: #000000; font-family: Arial, sans-serif; padding: 20px; margin: 0;">

    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 10px; padding: 20px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <tr>
            <td style="text-align: center;">
                <h2 style="color: #000000;">Hello <span style="color: gray;">${name}</span>,</h2>
                <p style="color: gray;">Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
            </td>
        </tr>

        <tr>
            <td style="padding: 20px; border-left: 4px solid #ABABAB; background-color: #F5F5F5; border-radius: 5px;">
                <p style="color: #000000; font-weight: bold;">Your Message:</p>
                <p style="color: gray;">${message}</p>
            </td>
        </tr>

        <tr>
            <td style="text-align: center; padding: 20px;">
                <p style="color: #000000;">If this is urgent, feel free to reply to this email.</p>
                <p style="color: #000000; font-weight: bold;">Best regards,<br>Nikhil Sai Ankilla</p>
            </td>
        </tr>
    </table>

</body>
</html>
`;
};

export const generateEmailHtmlForAuthor = (name: string, email: string, message: string) => {
    return `<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body style="background-color: #F5F5F5; color: #000000; font-family: Arial, sans-serif; padding: 20px; margin: 0;">

    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 10px; padding: 20px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <tr>
            <td style="text-align: center;">
                <h2 style="color: #000000;">New Contact Form Submission</h2>
                <p style="color: gray;">You have received a new message from your portfolio contact form.</p>
            </td>
        </tr>

        <tr>
            <td style="padding: 20px; border-left: 4px solid #ABABAB; background-color: #F5F5F5; border-radius: 5px;">
                <p style="color: #000000; font-weight: bold;">Sender Details:</p>
                <p><strong>Name:</strong> <span style="color: gray;">${name}</span></p>
                <p><strong>Email:</strong> <span style="color: gray;">${email}</span></p>
                <p style="color: #000000; font-weight: bold;">Message:</p>
                <p style="color: gray;">${message}</p>
            </td>
        </tr>

        <tr>
            <td style="text-align: center; padding: 20px;">
                <p style="color: #000000;">Please reply to this email if necessary.</p>
                <p style="color: #000000; font-weight: bold;">Best regards,<br>Your Portfolio</p>
            </td>
        </tr>
    </table>

</body>
</html>
`
}