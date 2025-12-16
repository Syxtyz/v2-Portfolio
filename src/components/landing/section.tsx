import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function SectionContent() {
    return (
        <div className="h-screen items-center justify-center flex flex-col gap-8">
            <span className="text-center px-2 grid gap-1">
                <p className="text-6xl md:text-8xl font-loto font-semibold">Tweiqht</p>
                <p className="text-sm md:text-2xl font-Castoro opacity-80">Software Developer</p>
                <div className="border -mx-2" />
                <p className="text-sm md:text-3xl opacity-80 relative -top-2 font-loto">Knowledge grows where curiosity refuses to fade</p>
            </span>
            <div className="flex gap-2">
                <a href="/resume.pdf" target="_blank" rel="noopener norefferer">
                    <Button className="w-fit group cursor-pointer" variant={"outline"}>
                        <p className="ml-1">Resume</p>
                        <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Button>
                </a>
                <a href="/about" target="_blank" rel={"nooepener norefferer"}>
                    <Button className="group w-fit cursor-pointer" variant={"outline"}>
                        <p className="ml-1">Learn more</p>
                        <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Button>
                </a>
            </div>
        </div>
    )
}