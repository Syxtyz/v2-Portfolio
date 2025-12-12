"use client"

import Image from "next/image";
import { Navigation } from "@/components/navigation/navigation";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import LandingContent from "./landing/main";
import { ScrollArea } from "@/components/ui/scroll-area";
import AboutContent from "./about/main";
import CertificatesContent from "./certificates/main";
import TechStackContent from "./tech-stack/main";
import JournalContent from "./journal/main";

export default function Home() {
  const [open, setOpen] = React.useState(true)

  return (
    <SidebarProvider open={open} onOpenChange={setOpen} className="overflow-hidden h-screen">
      <Navigation />
      <SidebarInset className="grid">
        <ScrollArea className="h-screen bg-background">
          {/* <div className="top-0 flex gap-4 bg-red-500 items-center pl-2">
            <SidebarTrigger className="cursor-pointer" />
            <p>Page Title</p>
          </div> */}
          <div className="grid gap-4 p-4">
            <LandingContent />
            <AboutContent />
            <TechStackContent />
            <CertificatesContent />
            <JournalContent />
          </div>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}
