'use client'

import { AccordionContent } from "@radix-ui/react-accordion"
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "./ui/sidebar"

type AppSidebarAccordion = {
  title: string;
  items: { name: string, phone: string|number }[];
}
export const AppSidebarAccordion = ({ title, items }: AppSidebarAccordion) => {
  return (
    <Accordion
      type='single'
      collapsible
    >
      <AccordionItem value="">
      <AccordionTrigger>
        {title}
      </AccordionTrigger>
        
      <AccordionContent>
        <SidebarMenuSub>
          {items.map(({ phone }) => (
            <SidebarMenuSubItem key={phone}>
              <SidebarMenuSubButton>
                {phone}
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>

        </AccordionContent>
        </AccordionItem>
    </Accordion>
  )
}