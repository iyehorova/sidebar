'use client'

import { PropsWithChildren } from "react";
import { AppDropdownMenu } from "./app-dropdown-menu"
import { DropdownMenuItemGroup, DropdownMenuListGroup } from "./ui/dropdown-menu";
import { SidebarSeparator } from "./ui/sidebar"
import { MenuItemT } from "@/types/common";

import { ChevronsUpDown } from "lucide-react";


type ProfileMenuT = {
  menu: {
    person: { name: string, email: string },
    appearance: MenuItemT[],
    main: MenuItemT[],
    logout: MenuItemT,
  }
}

export const AppProfileMenu = ({ menu }: ProfileMenuT) => {
  const { person, appearance, main, logout } = menu;
  
  const Person = ({ children }: PropsWithChildren) => {
    return (
      <div className="mx-0 px-0 rounded-none h-auto text-sm text-left flex gap-1.5 items-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 font-bold">D</div>
        <div>
          <div className="font-bold">{person.name}</div>
          <div>{person.email}</div>
        </div>
        { children}
      </div>
    );
  }

  return (
    <AppDropdownMenu trigger={<Person><ChevronsUpDown className="ml-auto" size={16} /></Person>} side="right" sideOffset={10}>
      <>
        <DropdownMenuItemGroup>
          <Person />
        </DropdownMenuItemGroup>
        
        <SidebarSeparator className="mx-0 my-1.5" />
        <DropdownMenuListGroup items={appearance} />
        <SidebarSeparator className="mx-0 my-1.5" />
        <DropdownMenuListGroup items={main} />
        <SidebarSeparator className="mx-0 my-1.5" />
        <DropdownMenuItemGroup>
          <>
            {logout.Icon && <logout.Icon />}
            {logout.name}
          </>
        </DropdownMenuItemGroup>
     </> 
    </AppDropdownMenu>
  )
}

