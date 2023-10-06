import { ReactNode } from "react";

interface MenuTitleProps {
  children: ReactNode;
  menuOpenedOrHovered: boolean;
}

export default function MenuTitle({
  children,
  menuOpenedOrHovered,
}: MenuTitleProps) {
  return (
    <div className="pt-8 pb-2 px-6">
      <span
        className={`text-primary-light text-xs tracking-wide ${
          menuOpenedOrHovered ? "" : "opacity-0"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
