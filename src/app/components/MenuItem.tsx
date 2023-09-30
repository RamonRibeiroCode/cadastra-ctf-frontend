import Link from "next/link";
import Joystick from "../icons/Joystick";
import CollectionPlayFill from "../icons/CollectionPlayFill";
import Trophy from "../icons/Trophy";
import People from "../icons/People";

export interface MenuItemProps {
  title: string;
  href: string;
  icon: MenuIcon;
  active: boolean;
  menuOpenedOrHovered: boolean;
}

export type MenuIcon =
  | "joystick"
  | "collection-play-fill"
  | "trophy"
  | "people";

export default function MenuItem({
  title,
  href,
  icon,
  active,
  menuOpenedOrHovered,
}: MenuItemProps) {
  const getIcon = () => {
    switch (icon) {
      case "joystick":
        return <Joystick />;

      case "collection-play-fill":
        return <CollectionPlayFill />;

      case "trophy":
        return <Trophy />;

      case "people":
        return <People />;

      default:
        return null;
    }
  };

  return (
    <li>
      <Link
        className={`relative w-full h-10 px-6 flex items-center hover:bg-primary-dark-light group ${
          active ? "bg-primary-dark-light" : ""
        }`}
        href={href}
      >
        <div
          className={`flex justify-center min-w-[24px] group-hover:text-primary-blue ${
            active ? "text-primary-blue" : "text-neutral-gray-blue"
          }`}
        >
          {getIcon()}
        </div>

        {menuOpenedOrHovered && (
          <span
            className={`text-sm group-hover:text-white min-w-[140px] ml-1 ${
              active ? "text-white" : "text-neutral-gray"
            }`}
          >
            {title}
          </span>
        )}
      </Link>
    </li>
  );
}
