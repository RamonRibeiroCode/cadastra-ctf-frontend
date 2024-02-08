"use client";

import Image from "next/image";
import PencilFill from "@/icons/PencilFill";
import ProfileInput from "@/components/ui/ProfileInput";
import useSWR from "swr";
import { fetcher } from "@/lib/swr";
import { useEffect, useState } from "react";
import api from "@/services/api";
import { useAuth } from "@/contexts/AuthContext";
import ImagePlaceholder from "@/icons/ImagePlaceholder";
import { User } from "@/typings/user";
import Upload from "@/components/ui/Upload";

export default function ProfileSettings() {
  const {
    data: user,
    isLoading,
    mutate: refetchUser,
  } = useSWR<User>("/users/profile", fetcher);
  const [avatarPreview, setAvatarPreview] = useState<null | string>(null);
  const [avatarFile, setAvatarFile] = useState<null | File>(null);
  const [name, setName] = useState(user.name);
  const { updateLoggedUser } = useAuth();

  const handleImage = (files: FileList) => {
    const file = files.item(0);

    setAvatarPreview(URL.createObjectURL(file));
    setAvatarFile(file);
  };

  const handleSaveProfile = async () => {
    const bodyFormData = new FormData();

    bodyFormData.append("name", name);

    if (avatarFile) {
      bodyFormData.append("avatar", avatarFile);
    }

    const response = await api.put("/users/profile", bodyFormData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const { avatarUrl } = response.data;

    updateLoggedUser(name, avatarUrl);

    setAvatarPreview(null);

    refetchUser();
  };

  useEffect(() => {
    setName(user.name);
  }, [user]);

  if (!user || isLoading) {
    return null;
  }

  const isEditingProfile = avatarPreview || name !== user.name;

  return (
    <div className="w-full bg-primary-default rounded-lg">
      <form className="p-[30px]">
        <div className="flex pt-3 pb-6">
          <span className="text-white text-sm w-1/3">Avatar</span>
          <div className="w-2/3">
            <Upload
              handleImage={handleImage}
              avatarPreview={avatarPreview}
              avatarUrl={user.avatarUrl}
            />
          </div>
        </div>

        <div className="flex items-center pt-3 pb-6">
          <span className="text-white text-sm w-1/3">
            Full Name <span className="text-[#f64e60]">*</span>
          </span>
          <div className="w-2/3">
            <ProfileInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
            />
          </div>
        </div>
      </form>

      <div className="flex justify-end items-center h-[70px] border-t border-[#2b2b40] px-[30px]">
        <button
          disabled={!isEditingProfile}
          onClick={handleSaveProfile}
          className="flex justify-center items-center w-[168px] h-[42px] rounded-md transition-all bg-[#3699ff] hover:bg-[#187de4] disabled:bg-neutral-gray disabled:cursor-not-allowed text-sm font-medium text-white"
        >
          Salvar Alterações
        </button>
      </div>
    </div>
  );
}
