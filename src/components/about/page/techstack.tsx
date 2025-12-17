import StackDiv from "@/components/ui/stack.div";
import { BackendItem } from "@/lib/values/techstack/backend";
import { DbsItems } from "@/lib/values/techstack/dbs";
import { FrontendItem } from "@/lib/values/techstack/frontend";
import { tplItems } from "@/lib/values/techstack/tpl";
import { UIUXItems } from "@/lib/values/techstack/uiux";

export function TechStack() {
    return (
        <aside className="flex-1 p-4 flex flex-col gap-2">
                <p className="font-semibold text-foreground">Tech Stack</p>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-1">
                        <p className="font-semibold text-foreground">Frontend</p>
                        <div className="flex gap-2">
                            {FrontendItem.map((item) => (
                                <StackDiv key={item.name} content={item.name}>
                                    {item.icon}
                                </StackDiv>
                            ))}
                        </div>
                    </div>
                    <div className="grid gap-1">
                        <p className="font-semibold text-foreground">Backend</p>
                        <div className="flex gap-2">
                            {BackendItem.map((item) => (
                                <StackDiv key={item.name} content={item.name}>
                                    {item.icon}
                                </StackDiv>
                            ))}
                        </div>
                    </div>
                    <div className="grid gap-1">
                        <p className="font-semibold text-foreground">UI/UX</p>
                        <div className="flex gap-2">
                            {UIUXItems.map((item) => (
                                <StackDiv key={item.name} content={item.name}>
                                    {item.icon}
                                </StackDiv>
                            ))}
                        </div>
                    </div>
                    <div className="grid gap-1">
                        <p className="font-semibold text-foreground">Databases & Services</p>
                        <div className="flex gap-2">
                            {DbsItems.map((item) => (
                                <StackDiv key={item.name} content={item.name}>
                                    {item.icon}
                                </StackDiv>
                            ))}
                        </div>
                    </div>
                    <div className="grid gap-1">
                        <p className="font-semibold text-foreground">Tools & Programming Languages</p>
                        <div className="flex gap-2">
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