import { AboutLink } from "./about-link";

export function Panels({ label }: { label: string }) {
    return (
        <>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60" />
            <p className="absolute p-6 text-foreground bottom-0 duration-300 group-hover:-translate-y-11.5 text-sm opacity-60 group-hover:opacity-100">
                {label}
            </p>
            <AboutLink />
        </>
    )
}