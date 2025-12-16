import MainContent from "@/components/about/main";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AboutPage() {
    return (
        <ScrollArea className="h-screen bg-background">
            <MainContent/>
        </ScrollArea>
    )
}