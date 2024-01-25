"use client";

import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import ImagePlaceholder from "@/icons/ImagePlaceholder";
import { getLowerSnakeName } from "@/helpers/format";
import UserShield from "@/icons/UserShield";
import PersonWorkspace from "@/icons/PersonWorkspace";

export default function TopBar() {
  const { handleLogout, user } = useAuth();

  const avatarOrPlaceHolder = user.avatar ? (
    <Image
      className="rounded-md overflow-hidden aspect-square object-contain bg-black"
      width={40}
      height={40}
      src={user.avatar}
      alt=""
    />
  ) : (
    <div className="flex items-center justify-center w-10 h-10 rounded-md border border-neutral-gray-senary border-dashed text-neutral-gray">
      <ImagePlaceholder />
    </div>
  );

  return (
    <div className="flex w-full h-16 bg-primary-default px-7 justify-end items-center">
      {user.role === "ADMIN" && (
        <Link
          className="flex items-center mr-6 bg-primary-light rounded-md px-3 py-2 space-x-2 text-white hover:text-primary-blue hover:opacity-80"
          href="/admin"
        >
          <PersonWorkspace />

          <span className="text-sm">Admin</span>
        </Link>
      )}

      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="flex items-center space-x-3" aria-label="Profile">
            <span className="text-white text-sm">{user.name}</span>

            {avatarOrPlaceHolder}
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
              {avatarOrPlaceHolder}

              <div className="ml-4 flex flex-col">
                <span className="font-medium text-white uppercase">
                  {user.name}
                </span>

                <span className="text-xs font-medium text-neutral-gray-tertiary">
                  @{getLowerSnakeName(user.name)}
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
