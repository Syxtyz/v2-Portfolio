"use client"

import { useInView } from "react-intersection-observer";
import HeaderContent from "./header";
import NavigationContent from "./nav";
import SectionContent from "./section";

export default function MainContent() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <div ref={ref} className="h-fit lg:h-screen relative grid gap-4">
            {inView && (
                <>
                    <HeaderContent />
                    <SectionContent />
                    <NavigationContent />
                </>
            )}
        </div>
    )
}