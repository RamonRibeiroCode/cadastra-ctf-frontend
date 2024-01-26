"use client";

import { useRouter } from "next/navigation";
import { CreatedOrEditChallenge } from "../page";

import AdminWrapper from "@/components/layout/AdminWrapper";
import ChallengeForm from "@/components/ChallengeForm";

export default function AdminCreateChallenge() {
  const { push } = useRouter();

  const handleCreateChallenge = async (challenge: CreatedOrEditChallenge) => {
    push("/admin/users");
  };

  return (
    <AdminWrapper>
      <div className="flex justify-between">
        <h1 className="text-3xl text-white mb-6">Create Challenge</h1>
      </div>

      <ChallengeForm type="CREATE" onSubmit={handleCreateChallenge} />
    </AdminWrapper>
  );
}
