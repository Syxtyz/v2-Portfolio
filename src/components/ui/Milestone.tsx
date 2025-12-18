import { Badge } from "./badge";

export function Milestone({ year, position, employment, description, children }: { year: string, position: string, employment: string, description: string, children?: React.ReactNode }) {
    return (
        <div className="flex gap-2">
            <div className="border" />
            <div className="grid gap-1 w-full py-1">
                <p className="text-muted-foreground font-Castoro -mb-1">{year}</p>
                <div className="flex gap-2 items-center">
                    <p className="font-semibold text-2xl">{position}</p>
                    <Badge>{employment}</Badge>
                </div>
                <p className="text-muted-foreground">{description}</p>
                <div className="flex gap-2 mt-1">
                    {children}
                </div>
            </div>
        </div>
    )
}