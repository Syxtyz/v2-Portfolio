import { Button } from "./button";
import { Links } from "@/lib/values/links";

export function Socials({ horizontal = false, showLabel = true, gap = 0 }: { horizontal?: boolean, showLabel?: boolean, gap?: number }) {
    return (
        <div className={`${!horizontal ? "grid gap-4" : `flex gap-${gap}`}`}>
            {Links.map((item, index) => (
                <a key={index} target="_blank" rel={"noopener noreferrer"}>
                    <Button onClick={() => window.open(item.link, "_blank")} variant={"ghost"} className="cursor-pointer">
                        {item.icon}
                        { showLabel && (
                            <>
                                {item.platform}
                            </>
                        )}
                    </Button>
                </a>
            ))}
        </div>
    )
}