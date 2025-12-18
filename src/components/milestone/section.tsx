import { Experiences } from "@/lib/values/experiences"
import { Milestone } from "../ui/Milestone"
import { Badge } from "../ui/badge"

export default function SectionContent() {
    return (
        // <>
        //     {images.map((item, index) => {
        //         const { ref, inView } = useInView({
        //             triggerOnce: true,
        //             threshold: 0.2
        //         })

        //         return (
        //             <div ref={ref} key={index} className="w-full h-fit">
        //                 {inView && (
        //                     <Image
        //                         src={item.src}
        //                         alt={item.alt}
        //                         width={300}
        //                         height={300}
        //                         priority={false}
        //                         style={{ objectFit: "cover" }}
        //                     />
        //                 )}
        //             </div>
        //         )
        //     })}
        // </>
        <div className="flex flex-col gap-8">
            {Experiences.map((item, index) => (
                <Milestone key={index} year={item.year} position={item.position} employment={item.employment} description={item.description}>
                    {item.techniques?.map((item, index) => (
                        <Badge key={index}>{item}</Badge>
                    ))}
                </Milestone>
            ))}
        </div>
    )
}