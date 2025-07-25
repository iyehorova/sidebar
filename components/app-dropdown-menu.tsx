'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu"

import { ReactNode } from "react";
type AppDropdownMenuT = {
  trigger: ReactNode,
  children: ReactNode,
  align?: 'start' | 'center' | 'end',
  side?: 'left' | 'right',
  sideOffset?: number,
}


export const AppDropdownMenu = ({ trigger, children, align='start', side='left', sideOffset=0 }: AppDropdownMenuT) => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus-visible:ring-0">
       {trigger}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width]"
        align={align}
        side={side}
        sideOffset={sideOffset}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}