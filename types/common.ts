import { CSSProperties, ElementType } from "react";

export type MenuItemT = {
  name: string,
  Icon?: ElementType
}

export type SidebarItemT = MenuItemT & {circleColor?: CSSProperties};