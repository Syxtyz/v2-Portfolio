import { Experiences } from "@/lib/values/experiences"
import { Milestone } from "../ui/Milestone"
import { Badge } from "../ui/badge"

export default function SectionContent() {
    return (
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