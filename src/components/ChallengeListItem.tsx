import Image from "next/image";
import Link from "next/link";

import { getChallengeDifficultyColor } from "@/helpers/challenge";
import UserShield from "@/icons/UserShield";
import Blood from "@/icons/Blood";
import DifficultyFlag from "@/components/ui/DifficultyFlag";
import InfoBlock from "@/components/ui/InfoBlock";
import { Difficulty } from "@/typings/challenge";
import { formatDateAndYear } from "@/helpers/format";

interface ChallengeListItemProps {
  id: number;
  difficulty: Difficulty;
  iconUrl: string;
  name: string;
  releaseAt: string;
  cp: number;
  creatorIconUrl: string;
  firstBloodIconUrl: string;
  wasCompletedByUser: boolean;
}

export default function ChallengeListItem({
  id,
  name,
  releaseAt,
  iconUrl,
  difficulty,
  cp,
  creatorIconUrl,
  firstBloodIconUrl,
  wasCompletedByUser,
}: Readonly<ChallengeListItemProps>) {
  return (
    <li className="flex bg-primary-default rounded-lg">
      <Link href={`/challenges/${id}`} className="p-7 flex-1">
        <div className="flex justify-between items-start">
          <div
            className="bg-neutral-gray-senary w-[50px] h-[50px] rounded-md border"
            style={{ borderColor: getChallengeDifficultyColor(difficulty) }}
          >
            <Image src={iconUrl} alt="" width={50} height={50} />
          </div>

          {wasCompletedByUser && (
            <div className="bg-[#1c3238] text-[#0bb783] text-xs px-3 py-2 rounded-lg">
              Completado
            </div>
          )}
        </div>

        <div className="mt-9 mb-2">
          <span className="font-semibold text-lg text-white">{name}</span>
        </div>

        <DifficultyFlag difficulty={difficulty} />

        <div className="flex justify-center space-x-5 mt-5 mb-3">
          <InfoBlock>
            <p className="text-white font-medium text-center text-sm">
              {formatDateAndYear(releaseAt)}
            </p>
            <p className="text-neutral-gray-quaternary text-center text-[13px]">
              Release Date
            </p>
          </InfoBlock>

          <InfoBlock>
            <p className="text-white font-medium text-center text-sm">{cp}</p>
            <p className="text-neutral-gray-quaternary text-center text-[13px]">
              CP earned
            </p>
          </InfoBlock>
        </div>

        <div className="w-full h-1 bg-blue-500 rounded-sm" />

        <div className="flex mt-4">
          <div className="flex flex-col justify-center items-center flex-1">
            <div className="flex items-center text-sm text-neutral-gray-quinary space-x-1">
              <span>Creator</span>
              <UserShield />
            </div>

            <Image
              className="mt-1 rounded-full"
              src={creatorIconUrl}
              width={35}
              height={35}
              alt=""
            />
          </div>

          <div className="flex flex-col justify-center items-center flex-1">
            <div className="flex items-center text-sm text-neutral-gray-quinary space-x-1">
              <span>First Blood</span>
              <Blood />
            </div>

            <div className="w-[35px] h-[35px]">
              {firstBloodIconUrl && (
                <Image
                  className="mt-1 rounded-full"
                  src={firstBloodIconUrl}
                  width={35}
                  height={35}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
