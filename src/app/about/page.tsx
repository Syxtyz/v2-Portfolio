import { CertificateContent } from "@/components/about/page/certificates";
import MainContent from "@/components/about/page/main";
import FooterContent from "@/components/footer/main";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AboutPage() {
    return (
        <ScrollArea className="h-screen bg-background">
            <MainContent />
            <CertificateContent />
            <div className="mx-4 mt-4 lg:mx-32">
                <FooterContent />
            </div>
        </ScrollArea>
    )
}