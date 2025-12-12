"use client"

import Link from "next/link"
import { navigation } from "@/lib/values/navigation"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import { ModeToggle } from "../theme/theme-toggle"
import { Separator } from "../ui/separator"
import { useRouter } from "next/navigation"
import React from "react"

export function Navigation() {
    const router = useRouter()
    const [collapsed, setCollapsed] = React.useState(true)

    return (
        <Sidebar collapsible="icon" className="">
            <SidebarHeader>
                <div className="flex items-center">
                    {collapsed && (
                        <SidebarGroup>
                            <SidebarGroupLabel>My Portfolio</SidebarGroupLabel>
                        </SidebarGroup>
                    )}
                    <SidebarTrigger onClick={() => setCollapsed(!collapsed)} />
                </div>
            </SidebarHeader>

            <Separator />

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent className="mb-2">
                        <SidebarMenu className="grid gap-2">
                            {navigation.map((item) => (
                                <SidebarMenuButton
                                    key={item.name}
                                    onClick={() => {
                                        const id = item.href.replace("#", "")
                                        const element = document.getElementById(id)
                                        if (element) {
                                            element.scrollIntoView({ behavior: "smooth", block: "start" })
                                        }
                                    }}
                                >
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