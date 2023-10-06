import Image from "next/image";
import Trophy from "@/icons/Trophy";
import Blood from "@/icons/Blood";

interface RankingTableRowProps {
  position: number;
}

export default function RankingTableRow({ position }: RankingTableRowProps) {
  const onPodiumNumbers = [1, 2, 3];
  const isOnPodium = onPodiumNumbers.includes(position);

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

  return (
    <tr className="border-b border-[#2b2b40] border-dashed">
      <td className="py-4">
        <div className="flex items-center text-white">
          <span className="mr-2">{position}°</span>
          {isOnPodium && <Trophy fill={getFillTrophy()} />}
        </div>
      </td>
      <td className="py-4">
        <Image
          className="rounded-full"
          src="https://assets.hackingclub.com/user/avatar/64ff03de5940f"
          width={45}
          height={45}
          alt="img"
        />
      </td>
      <td className="py-4">
        <div className="flex flex-col ml-4">
          <a href="#" className="text-white font-medium text-sm">
            davi_guimaraes_ext
          </a>

          <span className="text-xs text-neutral-gray-quinary my-1">
            Level 2
          </span>

          <div className="flex text-xs font-medium text-neutral-gray-quaternary">
            <span>First Blood</span>

            <Blood />
          </div>
        </div>
      </td>

      <td className="py-4 text-end">
        <span className="px-1.5 py-0.5 rounded text-[11px] font-semibold bg-[#1c3238] text-[#0bb783]">
          12m
        </span>
      </td>
    </tr>
  );
}
