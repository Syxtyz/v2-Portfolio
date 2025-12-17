"use client"

import { Socials } from "../ui/socials";
import SectionContent from "./section";

export default function FooterContent() {
    return (
        <div className="grid gap-4">
            <div className="border" />
            <div className="flex justify-between">
                <Socials isFooter={true}/>
                <SectionContent />
            </div>
        </div>
    )
}