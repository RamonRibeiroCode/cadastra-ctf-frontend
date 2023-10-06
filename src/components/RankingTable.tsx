import InfoCircleFill from "@/icons/InfoCircleFill";
import RankingTableRow from "@/components/RankingTableRow";

interface RankingTableProps {}

export default function RankingTable({}: RankingTableProps) {
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
          {[1, 2, 3, 4].map((item, index) => (
            <RankingTableRow key={item} position={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
