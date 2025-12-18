import SectionContent from "./section";

export default function MilestoneContent() {
    return (
        <div className="grid gap-4">
            <header className="mt-4">
                <p className="text-2xl font-semibold font-loto">Milestone</p>
                <p className="text-foreground/80 text-sm">My professional journey so far.</p>
            </header>
            <SectionContent />
        </div>
    )
}