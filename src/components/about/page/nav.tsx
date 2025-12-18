"use client"

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion"

export default function NavigationContent() {
    const handleScroll = () => {
        const element = document.getElementById("certificates")
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <div className="cursor-pointer mb-4 opacity-60 hover:opacity-100 flex flex-col items-center justify-center"
            onClick={handleScroll}
        >
            <p>Certificates</p>
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0.2
                }}
            >
                <ChevronDown/>
            </motion.div>
        </div>
    )
}