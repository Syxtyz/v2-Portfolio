import HeaderContent from "./header";
import NavigationContent from "./nav";
import SectionContent from "./section";

export default function MainContent() {
    return (
        <div className="relative h-screen p-4 flex flex-col gap-4 lg:px-32">
            <HeaderContent />
            <SectionContent />
            <NavigationContent />
        </div>
    )
}