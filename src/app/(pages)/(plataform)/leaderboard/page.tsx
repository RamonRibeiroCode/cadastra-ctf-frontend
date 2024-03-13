import Trophy from "@/icons/Trophy";
import LeaderboardTable from "@/components/LeaderboardTable";

export default function Leaderboard() {
  return (
    <div className="px-8">
      <div className="max-w-[920px] mx-auto">
        <div className="flex flex-col items-center mt-16">
          <div className="flex items-center text-white mb-16">
            <h3 className="mr-2 font-semibold text-2xl">CTF Leader Board</h3>

            <Trophy />
          </div>

          <LeaderboardTable />
        </div>
      </div>
    </div>
  );
}
