"use client"

import Link from "next/link"
import { navigation } from "@/lib/values/navigation"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import { ModeToggle } from "../theme/theme-toggle"
import { Separator } from "../ui/separator"
import { useRouter } from "next/navigation"

export function Navigation() {
    const router = useRouter()

    return (
        <Sidebar collapsible="icon" className="border-red-500">
            <SidebarHeader>
                <SidebarGroup>
                    <SidebarGroupLabel>My Portfolio</SidebarGroupLabel>
                </SidebarGroup>
            </SidebarHeader>

            <Separator />

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent className="mb-2">
                        <SidebarMenu className="grid gap-2">
                            {navigation.map((item) => (
                                <SidebarMenuButton key={item.name} onClick={() => router.push(item.href)}>
                                    <item.icon className="h-4 w-4" />
                                    <p className="text-sm">{item.name}</p>
                                </SidebarMenuButton>
                            ))}
                        </SidebarMenu>
                        <ModeToggle />
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}