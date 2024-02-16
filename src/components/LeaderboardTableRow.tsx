import Image from "next/image";
import Trophy from "@/icons/Trophy";
import Blood from "@/icons/Blood";
import { ScoreboardUser } from "@/typings/scoreboard";
import { getLowerSnakeName } from "@/helpers/format";

interface RankingTableRowProps {
  position: number;
  maxPoints: number;
  scoreboardUser: ScoreboardUser;
}

export default function RankingTableRow({
  position,
  scoreboardUser,
  maxPoints,
}: RankingTableRowProps) {
  const getFillTrophy = () => {
    switch (position) {
      case 1:
        return "#ffd900";

      case 2:
        return "#c0c0c0";

      case 3:
        return "#cd7f32";

      default:
        return "#ffd900";
    }
  };

  const onPodiumNumbers = [1, 2, 3];
  const isOnPodium = onPodiumNumbers.includes(position);

  const percent = (scoreboardUser.points * 100) / maxPoints;

  const percentWithMaximum = percent > 100 ? 100 : percent;

  return (
    <tr className="border-b border-[#2b2b40] border-dashed">
      <td className="py-6">
        <div className="flex items-center text-white">
          <span className="mr-2">{position}°</span>
          {isOnPodium && <Trophy fill={getFillTrophy()} />}
        </div>
      </td>
      <td className="py-6">
        {scoreboardUser.avatarUrl && (
          <Image
            className="rounded-full aspect-square object-contain"
            src={scoreboardUser.avatarUrl}
            width={45}
            height={45}
            alt="img"
          />
        )}
      </td>
      <td className="py-6">
        <div className="flex flex-col ml-4">
          <a href="#" className="text-white font-medium text-md">
            {getLowerSnakeName(scoreboardUser.name)}
          </a>

          <div className="flex items-center text-sm font-medium text-neutral-gray-quaternary">
            <span>{scoreboardUser.firstBloods} First Blood</span>

            <Blood />
          </div>
        </div>
      </td>

      <td className="py-6 ">
        <div className="flex flex-col items-end">
          <div className="mb-1">
            <span className="text-sm text-white font-semibold">
              {scoreboardUser.points}{" "}
            </span>
            <span className="text-sm text-neutral-gray-tertiary font-semibold">
              CP
            </span>
          </div>

          <div className="w-[300px] h-1.5 rounded-md bg-[rgba(255,255,255,0.1)]">
            <div
              className="h-full bg-white rounded-md"
              style={{ width: `${percentWithMaximum}%` }}
            />
          </div>
        </div>
      </td>
    </tr>
  );
}
