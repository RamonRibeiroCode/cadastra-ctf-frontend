import Image from "next/image";
import Trophy from "../../icons/Trophy";
import LeaderboardTable from "../../components/LeaderboardTable";

export default function Leaderboard() {
  return (
    <div className="max-w-[920px] mx-auto">
      <div className="flex flex-col items-center mt-10">
        <div className="text-center">
          <Image
            alt="Logo"
            src="https://app.safecodeweek.com.br/media/logos/Group-68.png"
            width={212}
            height={150}
          />
        </div>
        <div className="flex items-center text-white mb-16">
          <h3 className="mr-2 font-semibold text-2xl">CTF Leader Board</h3>

          <Trophy />
        </div>

        <LeaderboardTable />
      </div>
    </div>
  );
}
