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

  const hasPreviewOrAvatarUrl = user.avatarUrl || avatarPreview;
  const isEditingProfile = avatarPreview || name !== user.name;

  return (
    <div className="w-full bg-primary-default rounded-lg">
      <form className="p-[30px]">
        <div className="flex pt-3 pb-6">
          <span className="text-white text-sm w-1/3">Avatar</span>
          <div className="w-2/3">
            <div>
              <div className="relative w-fit">
                {hasPreviewOrAvatarUrl ? (
                  <Image
                    className="rounded-md aspect-square object-contain bg-black"
                    width={125}
                    height={125}
                    src={avatarPreview ?? user.avatarUrl}
                    alt=""
                  />
                ) : (
                  <div className="flex items-center justify-center w-[125px] h-[125px] rounded-md border border-neutral-gray-senary border-dashed text-neutral-gray">
                    <ImagePlaceholder width={45} height={45} />
                  </div>
                )}

                <div>
                  <label
                    className="absolute -right-4 -top-4 w-[25px] h-[25px] cursor-pointer flex justify-center items-center bg-white rounded-full text-[#565674] hover:text-[#3699ff]"
                    htmlFor="upload-photo"
                  >
                    <PencilFill />
                  </label>

                  <input
                    className="absolute opacity-0 -z-10"
                    type="file"
                    name="photo"
                    id="upload-photo"
                    onChange={(e) => handleImage(e.target.files)}
                  />
                </div>
              </div>

              <span className="block text-xs text-neutral-gray-tertiary mt-3">
                Allowed file types: png, jpg, jpeg.
              </span>
            </div>
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
