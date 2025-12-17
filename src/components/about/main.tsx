import HeaderContent from "./header";
import SectionContent from "./section";

export default function AboutContent() {
    return (
        <div id="about" className="h-screen flex flex-col">
            <HeaderContent/>

            <SectionContent/>
        </div>
    )
}