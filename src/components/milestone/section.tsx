"use client"

import { images } from "@/lib/values/images"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export default function SectionContent() {
    return (
        <>
            {images.map((item, index) => {
                const { ref, inView } = useInView({
                    triggerOnce: true,
                    threshold: 0.2
                })

                return (
                    <div ref={ref} key={index} className="w-full h-64">
                        {inView && (
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={300}
                                height={300}
                                priority={false}
                                style={{ objectFit: "cover" }}
                            />
                        )}
                    </div>
                )
            })}
        </>
    )
}