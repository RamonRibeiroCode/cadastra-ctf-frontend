"use client";

import Image from "next/image";
import useSWR from "swr";

import InfoBlock from "@/components/ui/InfoBlock";
import ProfileLinks from "@/components/ProfileLinks";
import ProfileContentWrapper from "@/components/ProfileContentWrapper";
import { fetcher } from "@/lib/swr";
import ImagePlaceholder from "@/icons/ImagePlaceholder";
import { User } from "@/typings/user";

export default function Profile({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading: userIsLoading } = useSWR<User>(
    "/users/profile",
    fetcher
  );
  const { data: config, isLoading: configIsLoading } = useSWR<{
    maxPoints: number;
  }>("/users/max-points", fetcher);

  if (!user || userIsLoading || configIsLoading) {
    return null;
  }

  const percent = (user.points * 100) / config.maxPoints;

  const percentWithMaximum = percent > 100 ? 100 : percent;

  return (
    <div className="px-8 mt-7">
      <div className="w-full mx-auto max-w-7xl">
        <div className="w-full bg-primary-default rounded-lg p-[30px] pb-0 mb-8">
          <div className="flex">
            <div className="relative mr-6">
              {user.avatarUrl ? (
                <Image
                  className="rounded-md overflow-hidden aspect-square object-contain bg-black"
                  width={125}
                  height={125}
                  src={user.avatarUrl}
                  alt=""
                />
              ) : (
                <div className="flex items-center justify-center w-[125px] h-[125px] rounded-md border border-neutral-gray-senary border-dashed text-neutral-gray">
                  <ImagePlaceholder width={45} height={45} />
                </div>
              )}

              <div className="flex justify-center items-center w-5 h-5 bg-white rounded-full absolute left-full bottom-7 -translate-x-1/2">
                <div className="w-3 h-3 bg-[#0bb783] rounded-full" />
              </div>
            </div>

            <div>
              <h1 className="text-xl uppercase font-semibold text-neutral-gray-secondary">
                {user.name}
              </h1>

              <div className="flex space-x-5 mt-3">
                <InfoBlock>
                  <span className="block text-xl font-semibold ml-1 text-white">
                    {user.points}
                  </span>

                  <div>
                    <span className="text-sm text-neutral-gray-quaternary">
                      CP
                    </span>
                    <span className="text-xs text-neutral-gray-senary mt-auto">
                      {" "}
                      - CTF Points
                    </span>
                  </div>
                </InfoBlock>

                <div className="flex flex-col justify-end">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-neutral-gray-quaternary leading-5">
                      Progresso nos desafios
                    </span>
                    <span className="text-sm font-semibold text-white leading-5">
                      {Math.round(percentWithMaximum)}%
                    </span>
                  </div>

                  <div className="w-[300px] h-1.5 rounded-md bg-[rgba(255,255,255,0.1)] mb-1">
                    <div
                      className="h-full bg-white rounded-md"
                      style={{
                        width: `${percentWithMaximum}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ProfileLinks />
        </div>

        <ProfileContentWrapper>{children}</ProfileContentWrapper>
      </div>
    </div>
  );
}
