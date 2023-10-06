import Image from "next/image";
import Link from "next/link";

import { getChallengeDifficultyColor } from "@/helpers/challenge";
import { Difficulty } from "@/mocks/challenges";
import UserShield from "@/icons/UserShield";
import Blood from "@/icons/Blood";
import DifficultyFlag from "@/components/ui/DifficultyFlag";
import InfoBlock from "@/components/ui/InfoBlock";

interface ChallengeListItemProps {
  id: number;
  difficulty: Difficulty;
  iconUrl: string;
  title: string;
  releaseDate: string;
  xp: number;
  creatorIconUrl: string;
  firstBloodIconUrl: string;
}

export default function ChallengeListItem({
  id,
  title,
  iconUrl,
  difficulty,
  xp,
  creatorIconUrl,
  firstBloodIconUrl,
}: ChallengeListItemProps) {
  return (
    <li className="flex bg-primary-default rounded-lg">
      <Link href={`/challenges/${id}`} className="p-7 flex-1">
        <div
          className="bg-neutral-gray-senary w-[50px] h-[50px] rounded-md border"
          style={{ borderColor: getChallengeDifficultyColor(difficulty) }}
        >
          <Image src={iconUrl} alt="" width={50} height={50} />
        </div>

        <div className="mt-9 mb-2">
          <span className="font-semibold text-lg text-white">{title}</span>
        </div>

        <DifficultyFlag difficulty={difficulty} />

        <div className="flex justify-center space-x-5 mt-5 mb-3">
          <InfoBlock>
            <p className="text-white font-medium text-center text-sm">
              21 August, 2023
            </p>
            <p className="text-neutral-gray-quaternary text-center text-[13px]">
              Release Date
            </p>
          </InfoBlock>

          <InfoBlock>
            <p className="text-white font-medium text-center text-sm">{xp}</p>
            <p className="text-neutral-gray-quaternary text-center text-[13px]">
              XP earned
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

            <Image
              className="mt-1 rounded-full"
              src={firstBloodIconUrl}
              width={35}
              height={35}
              alt=""
            />
          </div>
        </div>
      </Link>
    </li>
  );
}
