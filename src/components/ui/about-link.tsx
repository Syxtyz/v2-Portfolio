import { ArrowRight } from "lucide-react";

export function AboutLink({ description }: { description: string }) {
    return (
        <a href="/about" target="_blank" rel={"noopener noreferrer"}>
            <div className="grid gap-1 items-center absolute opacity-0 group-hover:-translate-y-11.5 duration-300 -bottom-6 left-4 group-hover:opacity-100">
                <p className="ml-2 text-sm text-foreground/60">{description}</p>
                <div className="flex items-center gap-1 rounded cursor-pointer hover:bg-white/15 w-fit p-2">
                    <p className="text-sm ml-1 font-semibold">Learn More</p>
                    <ArrowRight size={14} />
                </div>
            </div>
        </a>
    )
}