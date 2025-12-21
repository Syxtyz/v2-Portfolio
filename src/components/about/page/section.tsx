"use client"

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TechStack } from "./techstack";
import { Socials } from "@/components/ui/socials";
import { Links } from "@/lib/values/links";

// import Image from "next/image";
// import { TechStack } from "./techstack";
// import { Socials } from "@/components/ui/socials";
// import { Button } from "@/components/ui/button";
// import { ArrowUpRight } from "lucide-react";

// export default function SectionContent() {
//     return (
//         <div className="flex flex-col lg:flex-row items-center gap-4">
//             <section className="w-fit flex flex-1 flex-col items-center gap-4 p-4">
//                 <Image src={"/images/picture.png"} alt="My Profile Picture" width={300} height={300} className="rounded-full" />
//                 <p className="font-loto text-2xl text-foreground/80">Software Developer</p>
//                 <div className="flex lg:grid gap-4">
//                     <a href="/resume.pdf" target="_blank" rel="noopener norefferer">
//                         <Button className="w-fit group cursor-pointer" variant={"outline"}>
//                             <p className="ml-1">Resume</p>
//                             <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
//                         </Button>
//                     </a>
//                     <Button className="w-fit group cursor-pointer" variant={"outline"}>
//                         <p className="ml-1">Contact</p>
//                         <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
//                     </Button>
//                 </div>
//             </section>

//             <section className="flex-2 flex flex-col gap-8">
//                 <div className="grid gap-1">
//                     <p className="font-semibold text-foreground">Brief Summary</p>
//                     <p className="text-foreground/60">I am <strong className="text-foreground/80">Cejie Refamonte</strong>, a passionate technology enthusiast with a strong focus on building web, desktop, and mobile applications, as well as exploring networking and emerging technologies. I enjoy turning ideas into reality by leveraging the latest tools, frameworks, and protocols, constantly challenging myself to learn and grow.</p>
//                 </div>

//                 <div className="grid gap-1">
//                     <p className="font-semibold text-foreground">Let's Work Together</p>
//                     <p className="text-foreground/60">I’m always interested in new opportunities and exciting projects. Whether you’re looking for a developer or collaborator, I’d love to hear from you.</p>
//                 </div>

//                 <div className="grid gap-1">
//                     <p className="font-semibold text-foreground">Socials</p>
//                     <Socials horizontal={true} gap={4} />
//                 </div>
//             </section>

//             <TechStack />
//         </div>
//     )
// }

export default function SectionContent() {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-6">
            <section className="flex-1 grid justify-center text-center gap-8 lg:border lg:rounded-3xl p-4">
                <Image src={"/images/picture.png"} alt="My Profile Picture" width={300} height={300} className="rounded-full" />
                <p className="font-loto text-2xl text-foreground/80">Software Developer</p>
                <a href="/resume.pdf" target="_blank" rel="noopener norefferer">
                    <Button className="w-fit group cursor-pointer" variant={"outline"}>
                        <p className="ml-1">Resume</p>
                        <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Button>
                </a>
            </section>

            <section className="flex-2 flex flex-col gap-8">
                <div className="grid gap-1">
                    <p className="font-semibold text-foreground">Brief Summary</p>
                    <p className="text-foreground/60">I am <strong className="text-foreground/80">Cejie Refamonte</strong>, a passionate technology enthusiast with a strong focus on building web, desktop, and mobile applications, as well as exploring networking and emerging technologies. I enjoy turning ideas into reality by leveraging the latest tools, frameworks, and protocols, constantly challenging myself to learn and grow.</p>
                </div>

                <div className="grid gap-1">
                    <p className="font-semibold text-foreground">Let's Work Together</p>
                    <p className="text-foreground/60">I’m always interested in new opportunities and exciting projects. Whether you’re looking for a developer or collaborator, I’d love to hear from you.</p>
                </div>

                <div className="grid gap-1">
                    <p className="font-semibold text-foreground">Socials</p>
                    <div className="grid grid-cols-2 grid-rows-2 md:flex gap-2">
                        {Links.map((item, index) => (
                            <a key={index} target="_blank" rel="noopener noreferrer">
                                <Button onClick={() => window.open(item.link, "_blank")} variant={"ghost"}>
                                    {item.icon}
                                    {item.platform}
                                </Button>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="flex-1 lg:border lg:rounded-3xl p-4">
                <TechStack />
            </section>
        </div>
    )
}