"use client"

import { LucideSend, MailIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ScrollArea } from "../ui/scroll-area";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form"
import { ContactFormValues, contactSchema } from "@/lib/validators/contact";
import { zodResolver } from "@hookform/resolvers/zod"

export function ContactModal() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) })

    async function onSubmit(values: ContactFormValues) {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        })
        if (res.ok) {
            reset()
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size={"lg"} className="bg-secondary text-foreground hover:bg-secondary/50 w-40.5">
                    Send an Email
                    <MailIcon />
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Send me a message</DialogTitle>
                    <DialogDescription>I'll get back to you as soon as possible.</DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 grid">
                    <div className="space-y-2">
                        <Label htmlFor="fullname">Name</Label>
                        <Input {...register("name")} id="fullname" name="name" placeholder="John Doe" required />
                        {errors.name && (
                            <p className="text-sm text-destructive">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input {...register("email")} id="email" name="email" type="email" placeholder="john@example.com" required />
                        {errors.email && (
                            <p className="text-sm text-destructive">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input {...register("subject")} id="subject" name="subject" placeholder="Let's work together" required autoComplete="off" />
                        {errors.subject && (
                            <p className="text-sm text-destructive">
                                {errors.subject.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <ScrollArea className="h-30">
                            <Textarea
                                {...register("message")}
                                id="message"
                                name="message"
                                placeholder="Tell me about your project..."
                                className="min-h-30"
                                required
                            />
                        </ScrollArea>
                        {errors.message && (
                            <p className="text-sm text-destructive">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    <Button className="mt-1" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : <><LucideSend />Send Email</>}</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}