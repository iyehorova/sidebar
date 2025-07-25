'use client'

import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"

type AppBlockCollapseT = {
  title: string;
  items: string[];
}

export const AppBlockCollapse = ({ title, items }: AppBlockCollapseT) => {
  return (
    <SidebarMenu>
      <Collapsible className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton>
              <ChevronDown className="group-data-[state=open]/collapsible:hidden" />
              <ChevronUp className="group-data-[state=closed]/collapsible:hidden" />
              {title}
            </SidebarMenuButton>
          </CollapsibleTrigger>

          {!!items.length && (
            <CollapsibleContent>
              {items.map((item) => (
                <SidebarMenuButton key={item}>
                  {item}
                  <div className="h-6 w-6 flex items-center justify-center rounded-full bg-green-500 text-xs font-bold ml-auto">1</div>
                </SidebarMenuButton>
              ))}
            </CollapsibleContent>
          )}
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  )
}