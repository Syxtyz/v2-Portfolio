import { Button } from "./button";
import { Links } from "@/lib/values/links";

export function Socials({ isFooter = false }: { isFooter?: boolean }) {
    return (
        <div className={`${!isFooter && "grid gap-4"}`}>
            {Links.map((item, index) => (
                <a key={index} target="_blank" rel={"noopener noreferrer"}>
                    <Button onClick={() => window.open(item.link, "_blank")} variant={"ghost"} className="cursor-pointer">
                        {item.icon}
                        {!isFooter && (
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