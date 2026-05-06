"use client"

import { ArrowUpRight } from "lucide-react"
import { Button } from "../ui/button"
import dynamic from "next/dynamic"
import { CalLink } from "@/lib/values/links"
import Image from "next/image"

const ContactModal = dynamic(
    () => import("./modal").then((mod) => mod.ContactModal),
    { ssr: false }
)

export function ContactContent() {
    return (
        <div className="flex justify-center my-16">
            <div className="relative h-96 flex w-screen">
                <Image
                    src={"/images/shore.jpg"}
                    alt="Test"
                    width={800}
                    height={300}
                    style={{ width: "100%", height: "auto" }}
                    className="grayscale opacity-35 object-cover lg:object-fill"
                />
                <div className="absolute top-1/2 left-1/2 -translate-1/2">
                    <span className="-space-y-1.5 text-center px-2">
                        <p className="text-2xl lg:text-5xl font-loto font-semibold">Let's Connect</p>
                        <div className="border -mx-2 hidden md:flex" />
                        <p className="text-sm lg:text-2xl text-muted-foreground">Let us get in touch and collaborate. I am excited to work with you.</p>
                    </span>
                    <div className="grid md:flex gap-4 z-1 justify-center">
                        <ContactModal />
                        <a target="_blank" rel={"noopener noreferrer"} onClick={() => window.open(CalLink, "_blank")}>
                            <Button size={"lg"} className="bg-secondary text-foreground hover:bg-secondary/50 group w-40.5">
                                <p className="ml-1">Book a Meeting</p>
                                <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-background to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-background to-transparent" />
            </div>
        </div>
    )
}