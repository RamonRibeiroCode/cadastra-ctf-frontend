import Image from "next/image";

import HeartOutline from "@/icons/HeartOutline";
import RocketTakeoff from "@/icons/RocketTakeoff";
import HandThumbsUp from "@/icons/HandThumbsUp";
import WrenchAdjustable from "@/icons/WrenchAdjustable";
import { Activity } from "@/typings/activity";
import { getLowerSnakeName } from "@/helpers/format";

export default function FeedPost({ user, flag }: Activity) {
  return (
    <li className="w-full mb-10 bg-primary-default p-7 rounded-lg">
      <div className="flex items-center">
        <Image
          className="rounded-md"
          src={user.avatarUrl}
          alt=""
          width={50}
          height={50}
        />
        <div className="flex-1 ml-4">
          <div className="flex items-center">
            <span className="text-neutral-gray-secondary font-medium uppercase">
              {user.name}
            </span>
            <small className="text-neutral-gray-tertiary text-xs ml-1">
              @{getLowerSnakeName(user.name)}
            </small>
          </div>

          <span className="block text-neutral-gray-quaternary text-xs my-1">
            CP: {user.points}
          </span>
          <span className="block text-neutral-gray-quaternary text-xs">
            {/* TODO: Adicionar data dinâmica */}
            16 days ago
          </span>
        </div>
      </div>

      <div className="text-neutral-gray-secondary text-sm mt-5">
        O usuário {getLowerSnakeName(user.name)} resgatou uma flag{" "}
        {flag.difficulty} no desafio {flag.challenge.name}
      </div>

      {/* <ul className="flex py-2 border-t border-b border-[#2b2b40]">
        <li className="mr-1">
          <button className="flex justify-center items-center w-16 h-8 rounded-md transition-all text-[13px] text-white hover:text-[#f64e60] hover:bg-[#3a2434]">
            <HeartOutline fill="#f64e60" />

            <span className="ml-2">0</span>
          </button>
        </li>
        <li className="mr-1">
          <button className="flex justify-center items-center w-16 h-8 rounded-md transition-all text-[13px] text-white hover:text-[#ffa800] hover:bg-[#392f28]">
            <RocketTakeoff fill="#ffa800" />

            <span className="ml-2">0</span>
          </button>
        </li>
        <li className="mr-1">
          <button className="flex justify-center items-center w-16 h-8 rounded-md transition-all text-[13px] text-white hover:text-[#3699ff] hover:bg-[#212e48]">
            <HandThumbsUp fill="#3699ff" />

            <span className="ml-2">0</span>
          </button>
        </li>
        <li>
          <button className="flex justify-center items-center w-16 h-8 rounded-md transition-all text-[13px] text-white hover:text-[#0bb783] hover:bg-[#1c3238]">
            <WrenchAdjustable fill="#0bb783" />

            <span className="ml-2">0</span>
          </button>
        </li>
      </ul> */}
    </li>
  );
}
