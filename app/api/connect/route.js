import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === '465',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ message: 'Missing required fields (name, email, or message)' }, { status: 400 });
        }

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.TO_EMAIL,
            replyTo: email,
            subject: `Contact Form Submission from ${name}`,
            text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
            `,
            html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/> ${message.replace(/\n/g, '<br>')}</p>
        `,
        };

        // Send the Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    }
    catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}