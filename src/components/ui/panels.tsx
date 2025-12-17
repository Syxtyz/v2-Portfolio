import React from "react";
import { AboutLink } from "./about-link";

export function Panels({ label, description, children }: { label: string, description: string, children?: React.ReactNode }) {
    return (
        <>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60">
                <div className="opacity-40 group-hover:opacity-100 flex justify-center items-center h-full grayscale group-hover:grayscale-0">
                    {children}
                </div>
            </div>
            <p className="absolute font-semibold p-6 text-foreground bottom-0 duration-300 group-hover:-translate-y-11.5 mb-2 font-loto opacity-60 group-hover:opacity-100">
                {label}
            </p>
            <AboutLink description={description}/>
        </>
    )
}