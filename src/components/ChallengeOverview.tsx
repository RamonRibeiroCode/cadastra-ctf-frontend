"use client";

import Image from "next/image";

import { getChallengeDifficultyColor } from "@/helpers/challenge";
import DifficultyFlag from "@/components/ui/DifficultyFlag";
import InfoBlock from "@/components/ui/InfoBlock";
import Blood from "@/icons/Blood";
import ClockHistory from "@/icons/ClockHistory";
import Stars from "@/icons/Stars";
import Gem from "@/icons/Gem";
import PlayFill from "@/icons/PlayFill";
import Send from "@/icons/Send";
import { Difficulty } from "@/typings/challenge";
import { useCountDown } from "@/hooks/useCountDown";
import { padHour } from "@/helpers/format";

interface ChallengeOverviewProps {
  difficulty: Difficulty;
  description: string;
  imageUrl: string;
  name: string;
  releaseAt: string;
  cp: number;
  creatorIconUrl: string;
  firstBloodName: string;
  firstBloodAvatarUrl: string;
  url?: string;
  wasCompletedByUser: boolean;
  refetch: () => void;
}

export default function ChallengeOverview({
  name,
  imageUrl,
  description,
  difficulty,
  cp,
  creatorIconUrl,
  firstBloodName,
  firstBloodAvatarUrl,
  releaseAt,
  url,
  wasCompletedByUser,
  refetch,
}: Readonly<ChallengeOverviewProps>) {
  const { remainingSeconds } = useCountDown(releaseAt);

  const countDownWasFinished = remainingSeconds === 0;

  const formattedRemainingMinutes = padHour(
    parseInt((remainingSeconds / 60).toString())
  );

  const formattedRemainingSeconds = padHour(remainingSeconds % 60);

  return (
    <div className="bg-primary-default rounded-lg">
      {url && !wasCompletedByUser && (
        <div className="flex border-b border-[#2b2b40] p-7">
          <div className="w-1/4"></div>

          <div className="w-1/2 p-4">
            <span className="block text-neutral-gray-secondary font-medium text-center mb-1">
              Endereço
            </span>

            <a
              href={url}
              className="block text-xs font-medium text-center text-[#3699ff] hover:text-[#0073e9]"
              target="_blank"
            >
              {url}
            </a>
          </div>

          <div className="w-1/4 p-4 ">
            <span className="block text-neutral-gray-secondary font-medium text-left mb-1">
              Enviar flag
            </span>

            <div className="flex">
              <input
                type="text"
                placeholder="hackingclub{FLAG}"
                className="bg-transparent flex-1 h-10 py-2.5 px-3 border border-neutral-gray-senary rounded-md outline-none mr-2 text-[#92929f] text-sm placeholder:text-neutral-gray-tertiary focus:border-neutral-gray-quaternary"
              />

              <button className="flex items-center h-10 px-2">
                <Send />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex p-7">
        <div
          className="flex justify-center items-center w-[200px] h-[245px] border rounded-lg bg-neutral-gray-senary"
          style={{ borderColor: getChallengeDifficultyColor(difficulty) }}
        >
          <Image
            className="floating"
            src={imageUrl}
            width={75}
            height={75}
            alt=""
          />
        </div>

        <div className="ml-5 flex-1">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center">
                <h1 className="text-xl font-semibold text-neutral-gray-secondary mr-2">
                  {name}
                </h1>

                <DifficultyFlag difficulty={difficulty} />
              </div>

              <p className="mt-2 mb-3 text-[15px] text-neutral-gray-quaternary">
                {description}
              </p>
            </div>

            {!wasCompletedByUser && !url && !countDownWasFinished && (
              <div className="flex text-white">
                <span>{formattedRemainingMinutes}</span>
                <span>:{formattedRemainingSeconds}</span>
              </div>
            )}

            {!wasCompletedByUser && !url && countDownWasFinished && (
              <button
                className="flex justify-center items-center w-14 h-11 rounded-md transition-all bg-[#1c3238] hover:bg-[#0bb783] text-[#0bb783] hover:text-white"
                onClick={() => refetch()}
              >
                <PlayFill />
              </button>
            )}
          </div>

          <div className="flex flex-wrap max-w-4xl gap-y-2">
            <InfoBlock extraClasses="mr-4">
              <span className="flex items-center text-sm text-neutral-gray-quaternary">
                Data do lançamento
                <div className="text-[#0bb783] ml-1">
                  <ClockHistory />
                </div>
              </span>

              {/* TODO: Adicionar data dinâmica */}
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
                {firstBloodAvatarUrl && (
                  <Image
                    className="mr-1 rounded-full"
                    src={firstBloodAvatarUrl}
                    width={25}
                    height={25}
                    alt=""
                  />
                )}

                {firstBloodName}
              </p>
            </InfoBlock>
            <InfoBlock extraClasses="mr-4">
              <span className="flex items-center text-sm text-neutral-gray-quaternary">
                Total de CP
                <div className="ml-1 text-[#ffa800]">
                  <Gem />
                </div>
              </span>

              <p className="mt-2 text-white font-bold">
                {cp}
                <span className="text-xs text-neutral-gray-quaternary ml-1">
                  cp
                </span>
              </p>
            </InfoBlock>
          </div>
        </div>
      </div>
    </div>
  );
}
