"use client";

import AdminWrapper from "@/components/layout/AdminWrapper";
import UserForm from "@/components/UserForm";
import { useRouter } from "next/navigation";
import api from "@/services/api";
import { CreatedOrEditUser } from "../page";
import { jsonToFormData } from "@/helpers/format";

export default function AdminCreateUser() {
  const { push } = useRouter();

  const handleCreateUser = async (user: CreatedOrEditUser) => {
    const formData = jsonToFormData(user);

    await api.post("/admin/users", formData);

    push("/admin/users");
  };

  return (
    <AdminWrapper>
      <div className="flex justify-between">
        <h1 className="text-3xl text-white mb-6">Create User</h1>
      </div>

      <UserForm type="CREATE" onSubmit={handleCreateUser} />
    </AdminWrapper>
  );
}
