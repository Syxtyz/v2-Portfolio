import { CertificateContent } from "@/components/about/page/certificates";
import MainContent from "@/components/about/page/main";
import FooterContent from "@/components/footer/main";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AboutPage() {
    return (
        <ScrollArea className="h-full bg-background">
            <div className="grid gap-4 p-4 lg:px-32 min-h-full">
                <MainContent />
                <CertificateContent />
                <FooterContent />
            </div>
        </ScrollArea>
    )
}