'use client'

import { CSSProperties, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarItemT } from "@/types/common";
import { SidebarMenuButton } from "./ui/sidebar";

type AppSwitcherProps = {
  items: SidebarItemT[];
  defaultItem: SidebarItemT;
}

const CircleIcon = ({ circleColor }: { circleColor?: CSSProperties }) => <div className="w-[8px] h-[8px] rounded-full" style={ circleColor}></div>;

export const AppSwitcher = ({ items, defaultItem } : AppSwitcherProps) => { 
  const [activeItem, setActiveItem] = useState(defaultItem);
  if (!activeItem) return null;

  const handleItemClick = (index: number) => { 
    setActiveItem(items[index]);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton className="justify-between m-0.5 focus-visible:ring-0">
          <div className="inline-flex items-center gap-2">
            {!!activeItem.Icon ? <activeItem.Icon /> : <CircleIcon circleColor={activeItem.circleColor} /> }
            <span>{activeItem.name}</span>
          </div>
          <ChevronDown />
        </SidebarMenuButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64">
        {items.map(({ name, Icon, circleColor }, index) => {
          const isItemActive = activeItem.name === name;
          return(
            <DropdownMenuItem key={name} onClick={() => handleItemClick(index)} className={cn('justify-between', isItemActive && 'bg-sidebar-accent-foreground/10')}>
            <div className="inline-flex items-center gap-2">{!!Icon ? <Icon /> : <CircleIcon circleColor={circleColor} />}
              {name}
            </div>
            {isItemActive && <Check />}
          </DropdownMenuItem>
           
        )})}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}