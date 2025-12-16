"use client"

import Image from "next/image";
import { useInView } from "react-intersection-observer"

export default function SectionContent() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <div ref={ref}>
            {inView && (
                <Image
                    src={"/images/picture.png"}
                    alt="My Picture"
                    width={300}
                    height={300}
                />
            )}
        </div>
    )
}