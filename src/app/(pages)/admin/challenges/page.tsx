"use client";

import AdminWrapper from "@/components/layout/AdminWrapper";
import useSWR from "swr";
import { ChallengeListItem as IChallengeListItem } from "@/typings/challenge";
import { fetcher } from "@/lib/swr";

export default function AdminChallenges() {
  const { data: challenges, isLoading } = useSWR<IChallengeListItem[]>(
    "/admin/challenges",
    fetcher
  );

  if (isLoading) {
    return null;
  }

  return (
    <AdminWrapper>
      <h1 className="text-white">Challenges</h1>
    </AdminWrapper>
  );
}
