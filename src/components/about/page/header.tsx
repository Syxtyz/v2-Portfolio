"use client"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export default function HeaderContent() {
    return (
        <div className="flex flex-col md:flex-row justify-between h-fit gap-2">
            <div className="order-1 md:order-0 grid gap-1">
                <div className="flex gap-4 items-center">
                    <p className="text-lg md:text-2xl font-semibold font-loto">About Me</p>
                    <div className="border h-8" />
                    <p className="text-foreground/80 text-sm">A deeper look at who I am.</p>
                </div>

                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>About</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <a href="/" rel={"noopener noreferrer"}>
                <Button variant={"outline"} size={"lg"} className="cursor-pointer">
                    <p className="font-loto text-2xl">Tweiqht</p>
                </Button>
            </a>
        </div>
    )
}