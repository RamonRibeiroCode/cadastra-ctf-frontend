"use client";

import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function TopBar() {
  const { handleLogout, user } = useAuth();

  return (
    <div className="flex w-full h-16 bg-primary-default px-7 justify-end items-center">
      <Popover.Root>
        <Popover.Trigger asChild>
          <button aria-label="Profile">
            {user.avatar && (
              <Image
                className="rounded-md overflow-hidden"
                width={40}
                height={40}
                src={user.avatar}
                alt=""
              />
            )}
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            align="end"
            side="bottom"
            className="w-[275px] bg-primary-default rounded shadow-[0_0_30px_rgba(0,0,0,.3)] will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade"
            sideOffset={10}
          >
            <div className="flex items-center p-5">
              <Image
                className="rounded-md overflow-hidden"
                width={50}
                height={50}
                src={user.avatar}
                alt=""
              />

              <div className="ml-4 flex flex-col">
                <span className="font-medium text-white">RAMON RAMOS EXT</span>

                <span className="text-xs font-medium text-neutral-gray-tertiary">
                  @ramon_ramos_ext
                </span>
              </div>
            </div>

            <div className="px-4 py-2 border-t border-b border-[#2b2b40]">
              <Link
                href="/profile/overview"
                className="flex w-full rounded-md px-4 py-2 text-sm font-medium text-neutral-gray-quinary hover:bg-[#212e48] hover:text-[#3699ff]"
              >
                Meu perfil
              </Link>

              <Link
                href="/profile/settings"
                className="flex w-full rounded-md px-4 py-2 text-sm font-medium text-neutral-gray-quinary hover:bg-[#212e48] hover:text-[#3699ff]"
              >
                Alterar configurações
              </Link>
            </div>

            <div className="flex items-center px-4 pt-2 pb-3">
              <button
                onClick={handleLogout}
                className="flex w-full rounded-md px-4 py-2 text-sm font-medium text-neutral-gray-quinary hover:bg-[#212e48] hover:text-[#3699ff]"
              >
                Sair
              </button>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
