"use client";

import { useState } from "react";
import Image from "next/image";

import { getChallengeDifficultyColor } from "@/helpers/challenge";
import DifficultyFlag from "@/components/ui/DifficultyFlag";
import InfoBlock from "@/components/ui/InfoBlock";
import Blood from "@/icons/Blood";
import ClockHistory from "@/icons/ClockHistory";
import Stars from "@/icons/Stars";
import Gem from "@/icons/Gem";
import PlayFill from "@/icons/PlayFill";
import Power from "@/icons/Power";
import Send from "@/icons/Send";
import { Difficulty } from "@/typings/challenge";

interface ChallengeOverviewProps {
  difficulty: Difficulty;
  description: string;
  iconUrl: string;
  title: string;
  releaseDate: string;
  xp: number;
  creatorIconUrl: string;
  firstBloodName: string;
  firstBloodIconUrl: string;
}

export default function ChallengeOverview({
  title,
  iconUrl,
  description,
  difficulty,
  xp,
  creatorIconUrl,
  firstBloodName,
  firstBloodIconUrl,
}: ChallengeOverviewProps) {
  const [isChallengeStarted, setIsChallengeStarted] = useState(false);

  return (
    <div className="bg-primary-default rounded-lg">
      {isChallengeStarted && (
        <div className="flex border-b border-[#2b2b40] p-7">
          <button
            className="w-1/4 p-4 transition-all rounded-lg hover:shadow-[0_8px_17px_0_rgba(0,0,0,0.2),_0_6px_20px_0_rgba(0,0,0,0.19)]"
            onClick={() => setIsChallengeStarted(false)}
          >
            <span className="block text-center text-neutral-gray-secondary font-medium">
              Desligar instância
            </span>

            <div className="flex justify-center mt-2 text-[#f64e60]">
              <Power />
            </div>
          </button>

          <div className="w-1/2 p-4">
            <span className="block text-neutral-gray-secondary font-medium text-center mb-1">
              Endereço
            </span>

            <a
              href="https://app.safecodeweek.com.br/club/feed"
              className="block text-xs font-medium text-center text-[#3699ff] hover:text-[#0073e9]"
              target="_blank"
            >
              https://app.safecodeweek.com.br/club/feed
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
            src={iconUrl}
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
                  {title}
                </h1>

                <DifficultyFlag difficulty={difficulty} />
              </div>

              <p className="mt-2 mb-3 text-[15px] text-neutral-gray-quaternary">
                {description}
              </p>
            </div>

            {!isChallengeStarted && (
              <button
                className="flex justify-center items-center w-14 h-11 rounded-md transition-all bg-[#1c3238] hover:bg-[#0bb783] text-[#0bb783] hover:text-white"
                onClick={() => setIsChallengeStarted(true)}
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
                <Image
                  className="mr-1 rounded-full"
                  src={firstBloodIconUrl}
                  width={25}
                  height={25}
                  alt=""
                />
                {firstBloodName}
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
    </div>
  );
}
