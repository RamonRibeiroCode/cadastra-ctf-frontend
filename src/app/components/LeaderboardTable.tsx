import InfoCircleFill from "../icons/InfoCircleFill";
import LeaderboardTableRow from "./LeaderboardTableRow";

interface LeaderboardTableProps {}

export default function LeaderboardTable({}: LeaderboardTableProps) {
  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="border-0 text-white text-sm">
            <th className="p-0 w-[80px] font-medium text-left"># Rank</th>
            <th className="p-0 w-[70px] font-medium text-left">Player</th>
            <th className="p-0 w-[200px] font-medium"></th>
            <th className="p-0 w-[200px] font-medium text-end">
              <span className="flex justify-end items-center">
                Progress to the next level
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((item, index) => (
            <LeaderboardTableRow key={item} position={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
