"use client"

import { useInView } from "react-intersection-observer";
import SectionContent from "./section";

export default function AboutContent() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <div ref={ref} id="about" className="h-screen flex flex-col">
            <header className="mt-4">
                <p className="text-2xl font-semibold font-loto">About</p>
                <p className="text-foreground/80 text-sm">A little about me.</p>
            </header>
            {inView && (
                <SectionContent />
            )}
        </div>
    )
}