"use client";

import useSWR, { mutate } from "swr";
import Image from "next/image";

import AdminWrapper from "@/components/layout/AdminWrapper";
import {
  Difficulty,
  ChallengeListItem as IChallengeListItem,
} from "@/typings/challenge";
import { fetcher } from "@/lib/swr";
import Link from "next/link";
import Trash3Fill from "@/icons/Trash3Fill";
import PencilSquare from "@/icons/PencilSquare";
import DifficultyFlag from "@/components/ui/DifficultyFlag";
import api from "@/services/api";
import { useState } from "react";

export interface CreatedOrEditChallenge
  extends Pick<IChallengeListItem, "name"> {
  name: string;
  description: string;
  difficulty: Difficulty;
  url: string;
  releaseAt: string;
  flags: CreatedOrEditChallengeFlag[];
}

interface CreatedOrEditChallengeFlag {
  flag: string;
  difficulty: Difficulty;
  points: number;
}

export default function AdminChallenges() {
  const {
    data: challenges,
    isLoading,
    mutate,
  } = useSWR<IChallengeListItem[]>("/admin/challenges", fetcher);
  const [isDeleting, setIsDeleting] = useState(false);

  if (isLoading) {
    return null;
  }

  const handleDeleteChallenge = async (id: number) => {
    setIsDeleting(true);

    try {
      await api.delete(`/admin/challenges/${id}`);

      mutate();
    } catch (error) {
      console.error(error);
    }

    setIsDeleting(false);
  };

  return (
    <AdminWrapper>
      <div className="flex justify-between">
        <h1 className="text-white mb-6">Challenges</h1>
        <Link
          className="flex justify-center items-center w-[165px] h-[42px] rounded-md transition-all bg-[#3699ff] hover:bg-[#187de4] text-sm font-medium text-white"
          href="/admin/challenges/create"
        >
          Create Challenge
        </Link>
      </div>

      <table className="w-full max-w-5xl mx-auto">
        <thead>
          <tr className="border-0 text-white text-sm">
            <th className="p-0 w-[200px] font-medium text-left">Challenge</th>
            <th className="p-0 w-[200px] font-medium text-left">Difficulty</th>
            <th className="p-0 w-[20px] font-medium text-left">Points</th>
            <th className="p-0 w-[100px] font-medium text-end">
              <span className="flex justify-end items-center">Actions</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {challenges.map((challenge) => {
            const totalPoints = challenge.flags.reduce(
              (prevCp, currentFlag) => prevCp + currentFlag.points,
              0
            );

            return (
              <tr
                key={challenge.createdAt}
                className="border-b border-[#2b2b40] border-dashed"
              >
                <td className="py-6 font-medium text-left">
                  <div className="flex items-center space-x-4">
                    {challenge.imageUrl && (
                      <Image
                        className="rounded-full aspect-square object-contain bg-black"
                        src={challenge.imageUrl}
                        width={45}
                        height={45}
                        alt="img"
                      />
                    )}

                    <span className="text-sm text-white">{challenge.name}</span>
                  </div>
                </td>

                <td className="py-6 px-0 font-medium text-left">
                  <span className="text-sm text-white">
                    <DifficultyFlag difficulty={challenge.difficulty} />
                  </span>
                </td>

                <td className="py-6 px-0 font-medium text-left">
                  <span className="text-sm text-white">{totalPoints}</span>
                  <span className="text-sm text-neutral-gray-tertiary ml-1">
                    CP
                  </span>
                </td>

                <td className="py-6 px-0 text-end space-x-2">
                  <Link
                    href={`/admin/challenges/${challenge.id}/edit`}
                    className="inline-block align-middle p-1.5 rounded-md bg-[#FFBF00] text-white hover:opacity-80"
                  >
                    <PencilSquare />
                  </Link>

                  <button
                    disabled={isDeleting}
                    className="align-middle p-1.5 rounded-md bg-[#FF5733] text-white hover:opacity-80 disabled:bg-neutral-gray disabled:cursor-not-allowed"
                    onClick={() => handleDeleteChallenge(challenge.id)}
                  >
                    <Trash3Fill />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </AdminWrapper>
  );
}
