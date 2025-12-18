import { ArrowRight } from "lucide-react";

export function AboutLink({ description }: { description: string }) {
    return (
        <div className="grid gap-1 items-center absolute lg:opacity-0 group-hover:-translate-y-11.5 duration-300 bottom-2 lg:-bottom-6 left-4 group-hover:opacity-100 ">
            <p className="ml-2 text-sm text-foreground/60">{description}</p>
            <a href="/about" rel={"noopener noreferrer"}>
                <div className="bg-secondary/80 flex items-center gap-1 rounded-xl cursor-pointer hover:bg-white/15 w-fit py-2 px-1">
                    <p className="text-sm font-semibold ml-1">Learn More</p>
                    <ArrowRight size={14} />
                </div>
            </a>
        </div>
    )
}