'use client'

import { SidebarItemT } from "@/types/common"
import { SidebarGroup, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import Link from "next/link";

type AppSidebarMenuT = {
  menuItems: SidebarItemT[];
}
export const AppSidebarMenu = ({ menuItems }: AppSidebarMenuT) => {
  return (
    <SidebarGroup>
      {menuItems.map(({ name, Icon }) => (
        <SidebarMenuItem key={name} className="list-none">
          <SidebarMenuButton asChild>
            <Link href={`/`} className="inline-flex items-center gap-2">
              {Icon && <Icon />}
              {name}
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarGroup>
  )
}