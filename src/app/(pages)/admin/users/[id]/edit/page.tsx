"use client";

import { useRouter } from "next/navigation";

import api from "@/services/api";
import AdminWrapper from "@/components/layout/AdminWrapper";
import UserForm from "@/components/UserForm";
import { CreatedOrEditUser } from "../../page";
import { jsonToFormData } from "@/helpers/format";

interface ChallengeDetailProps {
  params: {
    id: string;
  };
}

export default function AdminUserEdit({
  params,
}: Readonly<ChallengeDetailProps>) {
  const { id } = params;

  const { push } = useRouter();

  const handleSaveUser = async (user: CreatedOrEditUser) => {
    const formData = jsonToFormData(user);

    await api.put(`/admin/users/${id}`, formData);

    push("/admin/users");
  };

  return (
    <AdminWrapper>
      <h1 className="text-3xl text-white mb-6">Editar</h1>

      <UserForm type="EDIT" userId={Number(id)} onSubmit={handleSaveUser} />
    </AdminWrapper>
  );
}
