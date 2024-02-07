"use client";

import { useRouter } from "next/navigation";
import { CreatedOrEditChallenge } from "../page";

import AdminWrapper from "@/components/layout/AdminWrapper";
import ChallengeForm from "@/components/ChallengeForm";
import api from "@/services/api";

export default function AdminCreateChallenge() {
  const { push } = useRouter();

  const handleCreateChallenge = async (challenge: CreatedOrEditChallenge) => {
    await api.post("/admin/challenges", {
      ...challenge,
      flags: JSON.stringify(
        challenge.flags.map((flag) => ({ ...flag, id: undefined }))
      ),
    });

    push("/admin/challenges");
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
