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
  } = challenge;

  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex bg-primary-default rounded-lg p-7 ">
          <div
            className="flex justify-center items-center w-[200px] h-[245px] border rounded-lg bg-neutral-gray-senary"
            style={{ borderColor: getChallengeDifficultyColor(difficulty) }}
          >
            <Image
              className="floating"
              src={iconUrl}
              alt=""
              width={75}
              height={75}
            />
          </div>

          <div className="ml-5">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-neutral-gray-secondary mr-2">
                {title}
              </h1>

              <DifficultyFlag difficulty={difficulty} />
            </div>

            <p className="mt-2 mb-3 text-[15px] text-neutral-gray-quaternary">
              {description}
            </p>

            <div className="flex flex-wrap max-w-4xl gap-y-2">
              <InfoBlock extraClasses="mr-4">
                <span className="flex items-center text-sm text-neutral-gray-quaternary">
                  Data do lançamento
                  <div className="text-[#0bb783] ml-1">
                    <ClockHistory />
                  </div>
                </span>

                <p className="mt-2 text-white font-bold">21 August, 2023</p>
              </InfoBlock>
              <InfoBlock extraClasses="mr-4">
                <span className="flex items-center text-sm text-neutral-gray-quaternary">
                  Criador
                  <div className="text-[#8950fc] ml-1">
                    <Stars />
                  </div>
                </span>

                <p className="flex items-center mt-2 text-white font-bold">
                  <Image
                    className="mr-1 rounded-full"
                    src={creatorIconUrl}
                    width={25}
                    height={25}
                    alt=""
                  />
                  Squad C4
                </p>
              </InfoBlock>
              <InfoBlock extraClasses="mr-4">
                <span className="flex items-center text-sm text-neutral-gray-quaternary">
                  First Blood
                  <div className="ml-1">
                    <Blood />
                  </div>
                </span>

                <p className="flex items-center mt-2 text-white font-bold">
                  <Image
                    className="mr-1 rounded-full"
                    src={firstBlood.iconUrl}
                    width={25}
                    height={25}
                    alt=""
                  />
                  {firstBlood.name}
                </p>
              </InfoBlock>
              <InfoBlock extraClasses="mr-4">
                <span className="flex items-center text-sm text-neutral-gray-quaternary">
                  Total de XP
                  <div className="ml-1 text-[#ffa800]">
                    <Gem />
                  </div>
                </span>

                <p className="mt-2 text-white font-bold">
                  {xp}
                  <span className="text-xs text-neutral-gray-quaternary ml-1">
                    xp
                  </span>
                </p>
              </InfoBlock>
            </div>
          </div>
        </div>

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
              <div className="flex items-center text-xs font-medium text-white">
                <ListNested />

                <span className="mx-2">Hacktivity </span>

                <span className="text-neutral-gray-tertiary">
                  - Últimas atividades neste desafio
                </span>
              </div>
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
