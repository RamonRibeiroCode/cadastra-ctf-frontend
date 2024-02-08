import Image from "next/image";
import Trophy from "@/icons/Trophy";
import Blood from "@/icons/Blood";
import {
  getMinutesBySeconds,
  getRemaningSeconds,
  getLowerSnakeName,
} from "@/helpers/format";

interface RankingTableRowProps {
  position: number;
  userAvatarUrl: string;
  userName: string;
  wasFirstBlood: boolean;
  executionTime: number;
}

export default function RankingTableRow({
  position,
  userAvatarUrl,
  userName,
  wasFirstBlood,
  executionTime,
}: Readonly<RankingTableRowProps>) {
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

  const remainingMinutes = getMinutesBySeconds(executionTime);
  const remainingSeconds = getRemaningSeconds(executionTime);

  const onPodiumNumbers = [1, 2, 3];
  const isOnPodium = onPodiumNumbers.includes(position);

  return (
    <tr className="border-b border-[#2b2b40] border-dashed">
      <td className="py-4">
        <div className="flex items-center text-white">
          <span className="mr-2">{position}°</span>
          {isOnPodium && <Trophy fill={getFillTrophy()} />}
        </div>
      </td>

      <td className="py-4">
        {userAvatarUrl && (
          <Image
            className="rounded-full aspect-square object-contain"
            src={userAvatarUrl}
            width={45}
            height={45}
            alt="img"
          />
        )}
      </td>

      <td className="py-4">
        <div className="flex flex-col ml-4">
          <a href="#" className="text-white font-medium text-sm">
            {getLowerSnakeName(userName)}
          </a>

          {wasFirstBlood && (
            <div className="flex text-xs font-medium text-neutral-gray-quaternary">
              <span>First Blood</span>

              <Blood />
            </div>
          )}
        </div>
      </td>

      <td className="py-4 text-end">
        <span className="px-1.5 py-0.5 rounded text-[11px] font-semibold bg-[#1c3238] text-[#0bb783]">
          {remainingMinutes !== 0 && `${remainingMinutes}m `}
          {remainingSeconds !== 0 && `${remainingSeconds}s`}
        </span>
      </td>
    </tr>
  );
}
