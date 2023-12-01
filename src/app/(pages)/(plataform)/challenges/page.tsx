"use client";

import useSWR from "swr";

import ChallengeListItem from "@/components/ChallengeListItem";
import { fetcher } from "@/lib/swr";
import { ChallengeListItem as IChallengeListItem } from "@/typings/challenge";

export default function Challenges() {
  const { data: challenges, isLoading } = useSWR<IChallengeListItem[]>(
    "/challenges",
    fetcher
  );

  if (!challenges || isLoading) {
    return null;
  }

  return (
    <div className="my-10">
      <div className="max-w-7xl mx-auto">
        <ul className="grid grid-cols-3 gap-7">
          {challenges.map((challenge) => (
            <ChallengeListItem
              key={challenge.releaseAt}
              id={challenge.id}
              name={challenge.name}
              creatorIconUrl="https://m3-ctf-app-44eyr.ondigitalocean.app/files/m3ctf-f4aaeb0b5cb85f1a-Foto2.jpeg"
              difficulty={challenge.difficulty}
              iconUrl={challenge.imageUrl}
              releaseAt={challenge.releaseAt}
              firstBloodIconUrl={challenge.firstBlood?.avatarUrl}
              cp={challenge.flags.reduce(
                (prevCp, currentFlag) => prevCp + currentFlag.points,
                0
              )}
              wasCompletedByUser={challenge.wasCompletedByUser}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
