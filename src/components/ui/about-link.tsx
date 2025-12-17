import { ArrowRight } from "lucide-react";

export function AboutLink() {
    return (
        <a href="/about" target="_blank" rel={"nooepener norefferer"}>
            <div className="flex gap-1 items-center w-fit p-1 rounded cursor-pointer hover:bg-white/15 absolute opacity-0 group-hover:-translate-y-11.5 duration-300 -bottom-6 left-4 group-hover:opacity-100">
                <p className="text-sm ml-1">Learn More</p>
                <ArrowRight size={14} />
            </div>
        </a>
    )
}