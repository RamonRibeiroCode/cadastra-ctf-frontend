"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ProfileContentWrapperProps {
  children: ReactNode;
}

export default function ProfileContentWrapper({
  children,
}: ProfileContentWrapperProps) {
  const pathname = usePathname();

  return (
    <div className="w-full bg-primary-default rounded-lg">
      <div className="flex justify-between items-center h-[70px] border-b border-[#2b2b40] px-[30px]">
        <span className="text-lg font-semibold text-white">
          Profile Details
        </span>

        {pathname === "/profile/overview" && (
          <Link
            className="flex justify-center items-center w-[115px] h-[42px] rounded-md transition-all bg-[#3699ff] hover:bg-[#187de4] text-sm font-medium text-white"
            href="/profile/settings"
          >
            Edit Profile
          </Link>
        )}
      </div>

      {children}
    </div>
  );
}
