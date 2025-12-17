"use client"

import { useInView } from "react-intersection-observer";
import HeaderContent from "./header";
import SectionContent from "./section";

export default function AboutContent() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <div ref={ref} id="about" className="h-screen flex flex-col">
            <HeaderContent />
            {inView && (
                <SectionContent />
            )}
        </div>
    )
}