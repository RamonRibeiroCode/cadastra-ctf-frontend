import Image from "next/image";

import { getChallengeDifficultyColor } from "../../../helpers/challenge";
import { challengesMock } from "../../../mocks/challenges";
import DifficultyFlag from "../../../components/DifficultyFlag";
import InfoBlock from "../../../components/ui/InfoBlock";
import ClockHistory from "../../../icons/ClockHistory";
import Stars from "../../../icons/Stars";
import Blood from "../../../icons/Blood";
import Gem from "../../../icons/Gem";
import Trophy from "../../../icons/Trophy";
import ListNested from "../../../icons/ListNested";
import RankingTable from "../../../components/RankingTable";
import ChallengeOverview from "../../../components/ChallengeOverview";
import Hacktivity from "../../../components/Hacktivity";

interface ChallengeDetailProps {
  params: {
    id: string;
  };
}

export default function ChallengeDetail({ params }: ChallengeDetailProps) {
  const { id } = params;

  const challenge = challengesMock.find(
    (challenge) => challenge.id.toString() === id
  );

  if (!challenge) {
    return <h1>Not found</h1>;
  }

  const {
    difficulty,
    iconUrl,
    title,
    description,
    firstBlood,
    xp,
    creatorIconUrl,
    releaseDate,
  } = challenge;

  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto">
        <ChallengeOverview
          creatorIconUrl={creatorIconUrl}
          description={description}
          difficulty={difficulty}
          iconUrl={iconUrl}
          xp={xp}
          title={title}
          releaseDate={releaseDate}
          firstBloodIconUrl={firstBlood.iconUrl}
          firstBloodName={firstBlood.name}
        />

        <div className="bg-primary-default rounded-lg p-7 my-7">
          <div className="flex justify-between mb-4">
            <span className="text-sm text-white">
              <strong className="font-medium">
                Seu progresso neste desafio é de:{" "}
              </strong>
              100%
            </span>

            <span className="text-sm text-white">
              <strong className="font-medium">Flags: </strong>
              1/1
            </span>
          </div>

          <div className="w-full h-3 bg-white rounded-md" />
        </div>

        <div className="bg-primary-default rounded-lg p-7">
          <div className="flex">
            <div className="flex-1">
              <div className="flex items-center text-xs font-medium text-white">
                <Trophy />

                <span className="mx-2">Machine Rank</span>

                <span className="text-neutral-gray-tertiary">
                  - Top 10 players
                </span>
              </div>

              <RankingTable />
            </div>
            <div className="flex-1">
              <div className="flex items-center text-xs font-medium text-white mb-10">
                <ListNested />

                <span className="mx-2">Hacktivity </span>

                <span className="text-neutral-gray-tertiary">
                  - Últimas atividades neste desafio
                </span>
              </div>

              {[1, 2, 3, 4].map((item) => (
                <Hacktivity key={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return challengesMock.map((challenge) => ({
    id: challenge.id.toString(),
  }));
}
