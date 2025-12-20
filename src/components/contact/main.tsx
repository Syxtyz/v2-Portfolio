"use client"

import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { ContactModal } from "./modal";
import { CalLink } from "@/lib/values/links";

export function ContactContent() {
    return (
        <div className="flex justify-center my-16">
            <div className="p-4 px-8 md:p-8 md:px-16 lg:p-16 lg:px-32 rounded-2xl flex flex-col items-center gap-4 bg-[url('/parabolic-pentagon.svg')] bg-center bg-no-repeat bg-cover border-2">
                <span className="-space-y-1.5 text-center px-2">
                    <p className="text-2xl lg:text-5xl font-loto font-semibold">Let's Connect</p>
                    <div className="border -mx-2 hidden md:flex" />
                    <p className="text-sm lg:text-2xl text-muted-foreground">Let us get in touch and collaborate. I am excited to work with you.</p>
                </span>
                <div className="grid md:flex gap-4">
                    <ContactModal />
                    <a target="_blank" rel={"noopener noreferrer"} onClick={() => window.open(CalLink, "_blank")}>
                        <Button size={"lg"} className="bg-secondary text-foreground hover:bg-secondary/50 group w-40.5">
                            <p className="ml-1">Book a Meeting</p>
                            <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}