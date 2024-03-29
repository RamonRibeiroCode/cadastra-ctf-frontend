"use client";

import useSWR from "swr";

import FeedPost from "@/components/FeedPost";
import { fetcher } from "@/lib/swr";
import { ActivityResponse } from "@/typings/activity";

export default function Feed() {
  const { data, isLoading } = useSWR<ActivityResponse>(
    "/users/activities",
    fetcher
  );

  if (isLoading) {
    return null;
  }

  return (
    <div className="px-8 mt-16">
      <div className="flex max-w-[945px] mx-auto">
        <ul className="w-full">
          {data.activities.map((feedActivity) => (
            <FeedPost key={feedActivity.createdAt} {...feedActivity} />
          ))}
        </ul>
      </div>
    </div>
  );
}
