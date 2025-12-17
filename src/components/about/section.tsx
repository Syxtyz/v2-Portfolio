import { Panels } from "../ui/panels";
import { Socials } from "../ui/socials";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiFramer, SiTailwindcss } from "react-icons/si";

export default function SectionContent() {
    const icons = [FaReact, FaNodeJs, SiFramer, SiTailwindcss]
    const RADIUS = 80

    return (
        <div className="flex flex-1 h-full gap-4 pb-6 pt-4 items-center">
            <div className="flex-1 group h-full relative bg-[url('/images/background.jpg')] bg-size-[500%_100%] bg-left border-accent border-2 overflow-hidden">
                <Panels label="Tweiqht" description="Real Name: Cejie Refamonte">
                    <Image
                        className="rounded-full"
                        src={"/images/picture.png"}
                        alt={"My Profile Picture"}
                        width={300}
                        height={300}
                    />
                </Panels>
            </div>

            <div className="flex-1 group h-full relative bg-[url('/images/background.jpg')] bg-size-[500%_100%] bg-position-[25%_center] border-accent border-2 overflow-hidden">
                <Panels label="Tech Stack" description="Tools & Technologies used">
                    <motion.div
                        className="relative w-56 h-56 flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 14,
                            ease: "linear"
                        }}
                    >
                        <svg
                            className="absolute inset-0"
                            viewBox="0 0 200 200"
                        >
                            <motion.circle
                                cx="100"
                                cy="100"
                                r="70"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeDasharray="4 6"
                                className="text-foreground/40"
                                animate={{
                                    strokeDashoffset: [0, 40],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 6,
                                    ease: "linear",
                                }}
                            />
                        </svg>

                        {icons.map((Icon, index) => {
                            const angle = (index / icons.length) * 360;

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute"
                                    style={{
                                        transform: `rotate(${angle}deg) translate(${RADIUS}px) rotate(-${angle}deg)`,
                                    }}
                                >
                                    <div className="rounded-full bg-background/80 backdrop-blur p-3 shadow-md">
                                        <Icon className="w-6 h-6 text-foreground" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </Panels>
            </div>

            <div className="flex-1 group h-full relative bg-[url('/images/background.jpg')] bg-size-[500%_100%] bg-position-[75%_center] border-accent border-2 overflow-hidden">
                <Panels label="Certifications" description="Credentials & Achievements"/>
            </div>

            <div className="flex-1 group h-full relative bg-[url('/images/background.jpg')] bg-size-[500%_100%] bg-right border-accent border-2 overflow-hidden">
                <Panels label="Socials" description="Let's Connect!">
                    <Socials/>
                </Panels>
            </div>
        </div>
    )
}