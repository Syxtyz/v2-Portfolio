"use client"

import { Socials } from "../ui/socials";
import SectionContent from "./section";

export default function FooterContent() {
    return (
        <div className="grid gap-4">
            <div className="border" />
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <Socials horizontal={true} showLabel={false}/>
                <SectionContent />
            </div>
        </div>
    )
}