import HeaderContent from "./header";
import NavigationContent from "./nav";
import SectionContent from "./section";

export default function MainContent() {
    return (
        <div className="h-fit lg:h-screen relative grid gap-4">
            <HeaderContent />
            <SectionContent />
            <NavigationContent />
        </div>
    )
}