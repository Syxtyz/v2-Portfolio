"use client"

import { Socials } from "../ui/socials";
import SectionContent from "./section";

export default function FooterContent() {
    return (
        <div className="grid">
            <div className="border" />
            <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 lg:px-32">
                <Socials horizontal={true} showLabel={false}/>
                <SectionContent />
            </div>
        </div>
    )
}