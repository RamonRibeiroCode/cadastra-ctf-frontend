"use client";

import useSWR from "swr";
import LeaderboardTableRow from "@/components/LeaderboardTableRow";
import { fetcher } from "@/lib/swr";
import { ScoreboardResponse } from "@/typings/scoreboard";

interface LeaderboardTableProps {}

export default function LeaderboardTable({}: LeaderboardTableProps) {
  const { data, isLoading } = useSWR<ScoreboardResponse>(
    "/users/scoreboard",
    fetcher
  );

  if (isLoading) {
    return null;
  }

  const { scoreboard, maxPoints } = data;

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
                Progresso nos desafios
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {scoreboard.map((scoreboardUser, index) => (
            <LeaderboardTableRow
              key={scoreboardUser.avatarUrl}
              maxPoints={maxPoints}
              position={index + 1}
              scoreboardUser={scoreboardUser}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
