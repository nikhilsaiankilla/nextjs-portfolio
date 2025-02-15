import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export const sendEmailClient = async (to: string, subject: string, html: string) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_ID,
            to,
            subject,
            html
        };
        const info = await transporter.sendMail(mailOptions);
        return info.response
    } catch (error) {
        throw new Error("Failed to send email");
    }
};