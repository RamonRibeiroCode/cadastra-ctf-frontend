"use client";

import { useRouter } from "next/navigation";
import { CreatedOrEditChallenge } from "../page";

import AdminWrapper from "@/components/layout/AdminWrapper";
import ChallengeForm from "@/components/ChallengeForm";
import api from "@/services/api";
import { jsonToFormData } from "@/helpers/format";

export default function AdminCreateChallenge() {
  const { push } = useRouter();

  const handleCreateChallenge = async (challenge: CreatedOrEditChallenge) => {
    const formData = jsonToFormData({
      ...challenge,
      flags: JSON.stringify(
        challenge.flags.map((flag) => ({ ...flag, id: undefined }))
      ),
    });

    await api.post("/admin/challenges", formData);

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
