"use client"

import { panels } from "@/lib/values/panels";
import { useInView } from "react-intersection-observer";
import { Panels } from "../ui/panels";

export default function SectionContent() {
    const { ref, inView } = useInView({
        triggerOnce: true,
    })

    return (
        <div ref={ref} className="flex h-full gap-4 pb-8 pt-4 items-center">
            {inView && (
                <>
                    {panels.map((item, index) => (
                        <div
                            key={index}
                            className={`flex-1 group h-full relative border-accent border-2 overflow-hidden bg-[url('/images/background.jpg')] bg-size-[500%_100%] ${item.isCenter
                                ? `bg-position-[${item.position}]`
                                : `bg-${item.position}`
                                }`}
                        >
                            <Panels label={item.label} />
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}