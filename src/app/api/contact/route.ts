import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validators/contact";

const resend = new Resend(process.env.RESEND_API_KEY as string)
const importToGoogleSheet = process.env.GOOGLE_SHEET_WEBHOOK_URL;

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const data = contactSchema.parse(body)

        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'cejier.04@gmail.com',
            subject: `${data.subject}`,
            html:
                `
                <p>Hi Mr. Cejie,

                <p>${data.message}

                <p>Best regards,<br/>${data.name}<br/>${data.email}</p>
            `
        })

        if (importToGoogleSheet) {
            await fetch(importToGoogleSheet, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    date: new Date(),
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    request: data.message,
                    status: "PENDING"
                })
            })
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 400 }
        )
    }
}