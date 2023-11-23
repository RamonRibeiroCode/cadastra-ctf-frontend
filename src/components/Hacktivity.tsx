import Image from "next/image";

import Flag from "@/icons/Flag";
import { getLowerSnakeName } from "@/helpers/format";
import { Difficulty } from "@/typings/challenge";

interface HacktivityProps {
  userName: string;
  flagDifficulty: Difficulty;
  flagPoints: number;
}

export default function Hacktivity({
  userName,
  flagDifficulty,
  flagPoints,
}: Readonly<HacktivityProps>) {
  return (
    <div className="flex mb-10">
      <div className="relative">
        <div className="w-10 h-10 relative z-10 flex justify-center items-center rounded-full text-[#0bb783] bg-neutral-gray-senary">
          <Flag />
        </div>

        <div className="border-l border-[#2b2b40] border-dashed absolute left-5 top-0 w-1 h-9" />
      </div>

      <div className="mt-1 ml-4">
        <span className="text-sm font-medium text-white">
          {getLowerSnakeName(userName)} pegou a flag {flagDifficulty} e ganhou{" "}
          {flagPoints}cp{" "}
        </span>

        <div className="flex items-center mt-1">
          <div className="mr-1 text-xs text-neutral-gray-tertiary">
            {/* TODO: Adicionar data dinâmica */}
            Owned at 15/09/2023 20:20:29 by
          </div>

          <Image
            src={`https://robohash.org/${userName}`}
            alt="img"
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
}
