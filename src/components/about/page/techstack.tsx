import StackDiv from "@/components/ui/stack.div";
import { BackendItem } from "@/lib/values/techstack/backend";
import { DbsItems } from "@/lib/values/techstack/dbs";
import { FrontendItem } from "@/lib/values/techstack/frontend";
import { tplItems } from "@/lib/values/techstack/tpl";
import { UIUXItems } from "@/lib/values/techstack/uiux";

export function TechStack() {
    return (
        <aside className="flex-1 flex flex-col gap-2 h-fit">
            <p className="font-semibold text-foreground text-lg">Tech Stack</p>
            <div className="flex flex-col gap-6">
                <div className="space-y-2">
                    <p className="font-semibold text-foreground">Frontend</p>
                    <div className="flex gap-2 sm:gap-3">
                        {FrontendItem.map((item) => (
                            <StackDiv key={item.name} content={item.name}>
                                {item.icon}
                            </StackDiv>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="font-semibold text-foreground">Backend</p>
                    <div className="flex gap-2 sm:gap-3">
                        {BackendItem.map((item) => (
                            <StackDiv key={item.name} content={item.name}>
                                {item.icon}
                            </StackDiv>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="font-semibold text-foreground">UI/UX</p>
                    <div className="flex gap-2 sm:gap-3">
                        {UIUXItems.map((item) => (
                            <StackDiv key={item.name} content={item.name}>
                                {item.icon}
                            </StackDiv>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="font-semibold text-foreground">Databases & Services</p>
                    <div className="flex gap-2 sm:gap-3">
                        {DbsItems.map((item) => (
                            <StackDiv key={item.name} content={item.name}>
                                {item.icon}
                            </StackDiv>
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="font-semibold text-foreground">Tools & Programming Languages</p>
                    <div className="flex gap-2 sm:gap-3">
                        {tplItems.map((item) => (
                            <StackDiv key={item.name} content={item.name}>
                                {item.icon}
                            </StackDiv>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}