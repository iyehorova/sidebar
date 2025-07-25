'use client'

import { Button } from "./ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarSeparator } from "./ui/sidebar";
import { AppSwitcher } from "./app-switcher";
import { Bell, ContactRound, LogOut, Settings, SunMedium, User } from "lucide-react";
import { AppSidebarMenu } from "./app-sidebar-menu";
import { AppBlockCollapse } from "./app-block-collapse";
import { formatUSPhoneNumber } from "@/lib/format-phone";
import { AppProfileMenu } from "./app-profile-menu";

export function AppSidebar() {
  const data = {
    status: [
      {
        name: 'Offline',
        circleColor: { backgroundColor: 'gray' } ,
      },
      {
        name: 'Available',
        circleColor:{ backgroundColor: 'green' },
      },
      {
        name: 'Unavailable',
        circleColor: { backgroundColor: 'red' },
      }
    ],
    sidebarMenu: [
      {
        name: 'Contacts',
        Icon: ContactRound,
      },
      {
        name: 'Settings',
        Icon: Settings,
      }
    ],
    numbers: [
      {
        name: 'first',
        phone: 16319704387
      },
      {
        name: '2nd',
        phone: 16427331854,
      },
    ],
    profileMenu: {
      person: {
        name: 'Dan Brown',
        email: 'danbrown@gmail.com'
      },
      appearance: [
        {
          name: 'Theme',
          Icon: SunMedium
        }
      ],
      main: [
        {
          name: 'Account',
          Icon: User
        },
        {
          name: 'Notification',
          Icon: Bell
        }
      ],
      logout: {
        name: 'Logout',
        Icon: LogOut
      }
    }

    
  }
  const phones = data.numbers.map(({ phone }) => formatUSPhoneNumber(phone));
  return (
    <Sidebar>
      <SidebarHeader>
         <AppSwitcher items={data.status} defaultItem={data.status[1]} /> 
      </SidebarHeader>

      <SidebarContent>
        <SidebarSeparator  className="mx-0"/>
        <Button variant='ghost'>Dialer</Button>
        <SidebarSeparator  className="mx-0"/>

        <SidebarMenu>
          <AppSidebarMenu menuItems={data.sidebarMenu} />
          <AppBlockCollapse title='Numbers' items={phones}></AppBlockCollapse>
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator  className="mx-0"/>
      <SidebarFooter>
        <AppProfileMenu menu={data.profileMenu}/>
      </SidebarFooter>
    </Sidebar>
  )
}