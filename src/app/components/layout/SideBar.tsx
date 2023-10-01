"use client";

import { useState } from "react";
import DoubleArrow from "../../icons/DoubleArrow";
import M3Logo from "../../icons/M3Logo";
import MenuItem, { MenuIcon } from "../MenuItem";
import { usePathname } from "next/navigation";
import MenuTitle from "../MenuTitle";

export interface IMenuItem {
  title: string;
  href: string;
  icon: MenuIcon;
}

const hackerLandMenuItems: IMenuItem[] = [
  {
    title: "Starting point",
    href: "/",
    icon: "collection-play-fill",
  },
  {
    title: "Challenges",
    href: "/challenges",
    icon: "joystick",
  },
];

const clubMenuItems: IMenuItem[] = [
  {
    title: "Leaderboard",
    href: "/leaderboard",
    icon: "trophy",
  },
  {
    title: "Community feed",
    href: "/feed",
    icon: "people",
  },
];

export default function SideBar() {
  const [opened, setOpened] = useState(true);
  const [onHover, setOnHover] = useState(false);

  const pathname = usePathname();

  const openedOrHovered = opened || onHover;

  return (
    <aside
      className={`flex flex-col flex-1 transition-all ${
        openedOrHovered ? "max-w-[265px]" : "max-w-[75px]"
      }`}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div
        className={`flex items-center bg-primary-medium h-16 ${
          openedOrHovered ? "justify-between pl-6" : "justify-center"
        }`}
      >
        {openedOrHovered && <M3Logo width={38} height={18} />}

        <button
          className="h-full px-6"
          onClick={() => setOpened((prevOpened) => !prevOpened)}
        >
          <DoubleArrow
            className={`transition-all ${!opened ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <nav className="flex-1 bg-primary-default">
        <MenuTitle menuOpenedOrHovered={openedOrHovered}>HACKERLAND</MenuTitle>

        <ul>
          {hackerLandMenuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.href}
              active={menuItem.href === pathname}
              menuOpenedOrHovered={openedOrHovered}
              {...menuItem}
            />
          ))}
        </ul>

        <MenuTitle menuOpenedOrHovered={openedOrHovered}>CLUB</MenuTitle>

        <ul>
          {clubMenuItems.map((menuItem) => (
            <MenuItem
              key={menuItem.href}
              active={menuItem.href === pathname}
              {...menuItem}
              menuOpenedOrHovered={openedOrHovered}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
