import NavigationContent from "@/components/landing/nav";
import SectionContent from "@/components/landing/section";

export default function LandingContent() {
    return (
        <main id="landing" className="relative">
            <SectionContent/>
            <NavigationContent/>
        </main>
    )
}