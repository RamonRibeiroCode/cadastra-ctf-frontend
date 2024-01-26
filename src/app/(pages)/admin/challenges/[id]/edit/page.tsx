"use client";

import { useRouter } from "next/navigation";

import AdminWrapper from "@/components/layout/AdminWrapper";
import { CreatedOrEditChallenge } from "../../page";
import ChallengeForm from "@/components/ChallengeForm";

interface ChallengeDetailProps {
  params: {
    id: string;
  };
}

export default function AdminChallengeEdit({
  params,
}: Readonly<ChallengeDetailProps>) {
  const { id } = params;

  const { push } = useRouter();

  const handleSaveChallenge = async (challenge: CreatedOrEditChallenge) => {
    console.log(challenge);

    push("/admin/challenges");
  };

  return (
    <AdminWrapper>
      <h1 className="text-3xl text-white mb-6">Editar</h1>

      <ChallengeForm
        type="EDIT"
        challengeId={Number(id)}
        onSubmit={handleSaveChallenge}
      />
    </AdminWrapper>
  );
}