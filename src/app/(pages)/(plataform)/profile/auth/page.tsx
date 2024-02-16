"use client";

import ProfileInput from "@/components/ui/ProfileInput";
import api from "@/services/api";
import { FormEvent, useState } from "react";

export default function ProfileAuth() {
  const [password, setPassword] = useState("");

  const handleSavePassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password) {
      return;
    }

    try {
      await api.patch("/users/profile/password", {
        password,
      });

      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full bg-primary-default rounded-lg p-[30px] space-y-6">
      <form onSubmit={handleSavePassword} className="flex flex-col">
        <span className="font-medium text-neutral-gray-tertiary text-[13px] mb-3">
          New Password
        </span>

        <ProfileInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <div className="flex justify-end items-center h-[70px] border-t border-[#2b2b40] px-[30px] mt-4">
          <button
            disabled={!password}
            className="flex justify-center items-center w-[168px] h-[42px] rounded-md transition-all bg-[#3699ff] hover:bg-[#187de4] disabled:bg-neutral-gray disabled:cursor-not-allowed text-sm font-medium text-white"
          >
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  );
}
