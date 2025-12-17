import { ScrollArea } from "@/components/ui/scroll-area";
import LandingContent from "@/components/landing/main";
import MilestoneContent from "@/components/milestone/main";
import FooterContent from "@/components/footer/main";
import AboutContent from "@/components/about/main";

export default function Home() {
  return (
    <ScrollArea className="h-screen bg-background">
      <main className="grid gap-4 p-4 lg:px-32">
        <LandingContent />
        <AboutContent/>
        <MilestoneContent/>
        <FooterContent/>
      </main>
    </ScrollArea>
  );
}
