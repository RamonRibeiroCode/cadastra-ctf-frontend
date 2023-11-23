"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/swr";
import { User } from "@/typings/user";
import { getLowerSnakeName } from "@/helpers/format";

export default function ProfileOverview() {
  const { data: user, isLoading } = useSWR<User>("/users/profile", fetcher);

  if (!user || isLoading) {
    return null;
  }

  return (
    <div className="w-full bg-primary-default rounded-lg p-[30px] space-y-6">
      <div className="flex">
        <span className="w-1/3 font-medium text-neutral-gray-tertiary text-[13px]">
          Full Name
        </span>

        <span className="w-2/3 text-white font-medium text-sm">
          {user.name}
        </span>
      </div>

      <div className="flex">
        <span className="w-1/3 font-medium text-neutral-gray-tertiary text-[13px]">
          E-mail
        </span>

        <span className="w-2/3 text-white font-medium text-sm">
          {user.email}
        </span>
      </div>

      <div className="flex py-5">
        <span className="w-1/3 font-medium text-neutral-gray-tertiary text-[13px]">
          Username/Nick
        </span>

        <span className="w-2/3 text-white font-medium text-sm">
          {getLowerSnakeName(user.name)}
        </span>
      </div>
    </div>
  );
}
