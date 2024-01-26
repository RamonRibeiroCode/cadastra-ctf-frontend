"use client";

import { useRouter } from "next/navigation";

import api from "@/services/api";
import AdminWrapper from "@/components/layout/AdminWrapper";
import { User } from "@/typings/user";
import UserForm from "@/components/UserForm";

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

  const handleSaveUser = async (user: Omit<User, "avatarUrl">) => {
    await api.put(`/admin/users/${id}`, {
      name: user.name,
      email: user.email,
      points: user.points,
    });

    push("/admin/users");
  };

  return (
    <AdminWrapper>
      <h1 className="text-3xl text-white mb-6">Editar</h1>

      <UserForm type="EDIT" userId={Number(id)} onSubmit={handleSaveUser} />
    </AdminWrapper>
  );
}
