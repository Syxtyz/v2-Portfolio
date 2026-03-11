import { Experiences } from "@/lib/values/experiences"
import { Milestone } from "../ui/Milestone"

export default function SectionContent() {
    return (
        <div className="flex flex-col gap-8">
            {Experiences.map((item, index) => (
                <Milestone key={index} year={item.year} position={item.position} location={item.location} employment={item.employment} description={item.description}/>
            ))}
        </div>
    )
}