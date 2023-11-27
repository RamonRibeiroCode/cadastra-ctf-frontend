import InfoCircleFill from "@/icons/InfoCircleFill";
import RankingTableRow from "@/components/RankingTableRow";
import { ScoreboardDetail } from "@/typings/challenge";

interface RankingTableProps {
  scoreboard: ScoreboardDetail[];
}

export default function RankingTable({
  scoreboard,
}: Readonly<RankingTableProps>) {
  return (
    <div className="table-responsive mt-10">
      <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
        <thead>
          <tr className="border-0 text-white text-xs">
            <th className="p-0 w-[50px] font-medium"># Rank</th>
            <th className="p-0 w-[50px] font-medium">Player</th>
            <th className="p-0 w-[200px] font-medium"></th>
            <th className="p-0 w-[200px] font-medium text-end">
              <div className="flex justify-end items-center">
                <span className="mr-1"> Time to complete</span>
                <InfoCircleFill />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {scoreboard.map((item, index) => (
            <RankingTableRow
              key={item.user.avatarUrl}
              position={index + 1}
              userAvatarUrl={item.user.avatarUrl}
              userName={item.user.name}
              wasFirstBlood={index === 0}
              executionTime={item.executionTime}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
