"use client";

import useSWR from "swr";

import Trophy from "@/icons/Trophy";
import ListNested from "@/icons/ListNested";
import RankingTable from "@/components/RankingTable";
import ChallengeOverview from "@/components/ChallengeOverview";
import Hacktivity from "@/components/Hacktivity";
import { fetcher } from "@/lib/swr";
import { ActivityDetail, ChallengeDetail } from "@/typings/challenge";
import { useAuth } from "@/contexts/AuthContext";

interface ChallengeDetailProps {
  params: {
    id: string;
  };
}

export default function ChallengeDetail({
  params,
}: Readonly<ChallengeDetailProps>) {
  const { id } = params;
  const { user } = useAuth();

  const {
    data: challenge,
    isLoading,
    mutate,
  } = useSWR<ChallengeDetail>(`/challenges/${id}`, fetcher, {
    revalidateOnFocus: false,
  });

  if (isLoading) {
    return null;
  }

  if (!challenge) {
    return <h1 className="text-white my-4">Not found</h1>;
  }

  const {
    name,
    description,
    difficulty,
    imageUrl,
    releaseAt,
    firstBlood,
    flags,
    url,
    scoreboard,
    wasCompletedByUser,
  } = challenge;

  const allFlagsPoints = flags.reduce((accumulator, flag) => {
    return accumulator + flag.points;
  }, 0);

  const howManyFlagsWereRedeemed = flags.reduce((accumulator, flag) => {
    const flagWasRedeemed = flag.activities.some(
      (activity) => activity.user.id === user.id
    );

    if (flagWasRedeemed) {
      return accumulator + 1;
    }

    return accumulator;
  }, 0);

  const flagsActivities: ActivityDetail[] = [];

  flags.forEach((flag) => flagsActivities.push(...flag.activities));

  flagsActivities.sort((activityA, activityB) => {
    const activityADate = new Date(activityA.createdAt);
    const activityBDate = new Date(activityB.createdAt);

    return Number(activityBDate) - Number(activityADate);
  });

  return (
    <div className="my-10 px-8">
      <div className="max-w-7xl mx-auto">
        <ChallengeOverview
          id={id}
          creatorIconUrl="https://cadastra-ctf.s3.amazonaws.com/Foto2.jpeg"
          description={description}
          difficulty={difficulty}
          imageUrl={imageUrl}
          cp={allFlagsPoints}
          name={name}
          releaseAt={releaseAt}
          firstBloodAvatarUrl={firstBlood?.avatarUrl}
          firstBloodName={firstBlood?.name}
          url={url}
          wasCompletedByUser={wasCompletedByUser}
          refetch={mutate}
        />

        <div className="bg-primary-default rounded-lg p-7 my-7">
          <div className="flex justify-between mb-4">
            <span className="text-sm text-white">
              <strong className="font-medium">
                Seu progresso neste desafio é de:{" "}
              </strong>
              {(howManyFlagsWereRedeemed * 100) / challenge.flags.length}%
            </span>

            <span className="text-sm text-white">
              <strong className="font-medium">Flags:</strong>{" "}
              {howManyFlagsWereRedeemed}/{challenge.flags.length}
            </span>
          </div>

          <div className="w-full h-3 rounded-md bg-[rgba(255,255,255,0.1)] mb-1">
            <div
              className="h-full bg-white rounded-md"
              style={{
                width: `${
                  (howManyFlagsWereRedeemed * 100) / challenge.flags.length
                }%`,
              }}
            />
          </div>
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

              <RankingTable scoreboard={scoreboard} userId={user.id} />
            </div>
            <div className="flex-1">
              <div className="flex items-center text-xs font-medium text-white mb-10">
                <ListNested />

                <span className="mx-2 mr-1">Hacktivity</span>

                <span className="text-neutral-gray-tertiary">
                  - Últimas atividades neste desafio
                </span>
              </div>

              <ul className="max-h-[730px] overflow-auto custom-scrollbar">
                {flagsActivities.map((activity) => (
                  <Hacktivity
                    key={activity.createdAt}
                    createdAt={activity.createdAt}
                    userName={activity.user.name}
                    flagDifficulty={activity.flag.difficulty}
                    flagPoints={activity.flag.points}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
