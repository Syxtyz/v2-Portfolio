"use client"

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion"

export default function NavigationContent() {
    const handleScroll = () => {
        const element = document.getElementById("about")
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <div className="absolute bottom-4 left-1/2 -translate-1/2 cursor-pointer opacity-60 hover:opacity-100"
            onClick={handleScroll}
        >
            <p>Scroll Down</p>
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0.2
                }}
            >
                <ChevronDown className="mx-auto" />
            </motion.div>
        </div>
    )
}