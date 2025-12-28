"use client"

import { AwardIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";

interface CertificateProps {
    title: string
    certificate: "Participation" | "Completion"
    date: string
    imageSrc?: string
}

export function CertificateForm({ title, certificate, date, imageSrc }: CertificateProps) {
    const [hovered, setHovered] = React.useState(false)
    const [openMobile, setOpenMobile] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [isMobile, setIsMobile] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)

        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    if (!mounted || !imageSrc) return null

    return (
        <div className="relative">
            <div
                className="grid gap-2 lg:cursor-pointer lg:opacity-50 hover:opacity-100"
                onMouseEnter={() => !isMobile && setHovered(true)}
                onMouseLeave={() => !isMobile && setHovered(false)}
            >
                <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <p className="text-xs">Certificate of {certificate}</p>
                </div>

                <button
                    className="w-fit flex items-center gap-2 cursor-pointer border rounded-lg lg:border-0 p-2"
                    onClick={() => isMobile && setOpenMobile(true)}
                >
                    <AwardIcon size={16} /> View Certificate
                </button>

                <p className="mb-6 text-xs text-muted-foreground">
                    Date issued: {date}
                </p>
            </div>

            <AnimatePresence>
                {!isMobile && hovered && (
                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 150, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 28 }}
                        className="fixed top-0 right-0 h-screen w-120 z-50 hidden md:flex items-center mx-16"
                    >
                        <div className="relative w-full">
                            {loading && (
                                <Skeleton className="w-full h-150 rounded-lg" />
                            )}
                            <Image
                                src={imageSrc}
                                alt="Certificate"
                                width={600}
                                height={600}
                                onLoad={() => setLoading(false)}
                                className={`rounded-lg shadow-xl transition-opacity ${loading ? "opacity-0" : "opacity-100"}`}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMobile && openMobile && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpenMobile(false)}
                    >
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 40, opacity: 0 }}
                            className="relative w-full max-w-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setOpenMobile(false)}
                                className="absolute -top-4 -right-4 bg-secondary/60 rounded-full p-2 text-foreground"
                            >
                                <X size={20} />
                            </button>

                            <img
                                src={imageSrc}
                                onLoad={() => setLoading(false)}
                                className="rounded-lg shadow-lg w-full"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
