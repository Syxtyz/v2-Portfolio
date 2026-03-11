import { MilestoneProps } from "@/lib/values/props/milestone";
import { Badge } from "./badge";

export function Milestone({ year, position, location, employment, description }: MilestoneProps) {
    return (
        <div className="flex gap-2">
            <div className="border" />
            <div className="grid gap-1 w-full py-1">
                <p className="text-muted-foreground font-Castoro -mb-1">{year}</p>
                <div className="flex gap-2">
                    <p className="font-semibold text-2xl">{position}</p>
                    <Badge>{employment}</Badge>
                </div>
                <p className="-mt-1 text-muted-foreground">{location}</p>
                <p className="opacity-95">{description}</p>
            </div>
        </div>
    )
}