"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Visão geral",
    href: "/profile/overview",
  },
  {
    label: "Configurações",
    href: "/profile/settings",
  },
];

export default function ProfileLinks() {
  const pathname = usePathname();

  return (
    <div className="flex mt-8 space-x-7">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link key={link.href} className="flex relative h-10" href={link.href}>
            <span
              className={`text-[15px] font-semibold  ${
                isActive ? "text-[#3699ff]" : "text-neutral-gray-tertiary"
              }`}
            >
              {link.label}
            </span>

            <div
              className={`absolute left-0 bottom-0 h-[2px] bg-[#3699ff] transition-all ${
                isActive ? "w-full" : "w-0"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
