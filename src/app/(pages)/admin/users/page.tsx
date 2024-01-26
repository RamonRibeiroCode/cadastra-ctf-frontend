"use client";

import Image from "next/image";
import useSWR from "swr";

import AdminWrapper from "@/components/layout/AdminWrapper";
import { fetcher } from "@/lib/swr";
import { User } from "@/typings/user";
import Trash3Fill from "@/icons/Trash3Fill";
import PencilSquare from "@/icons/PencilSquare";
import Link from "next/link";
import api from "@/services/api";
import { useState } from "react";

export interface AdminUser extends User {
  id: number;
}

export interface CreatedOrEditUser extends Omit<User, "avatarUrl"> {
  password?: string;
}

export default function AdminUsers() {
  const {
    data: users,
    isLoading: usersIsLoading,
    mutate,
  } = useSWR<AdminUser[]>("/admin/users", fetcher);
  const [isDeleting, setIsDeleting] = useState(false);

  if (usersIsLoading) {
    return null;
  }

  const handleDeleteUser = async (id: number) => {
    setIsDeleting(true);

    try {
      await api.delete(`/admin/users/${id}`);

      mutate();
    } catch (error) {
      console.error(error);
    }

    setIsDeleting(false);
  };

  return (
    <AdminWrapper>
      <div className="flex justify-between">
        <h1 className="text-3xl text-white mb-6">Users</h1>
        <Link
          className="flex justify-center items-center w-[115px] h-[42px] rounded-md transition-all bg-[#3699ff] hover:bg-[#187de4] text-sm font-medium text-white"
          href="/admin/users/create"
        >
          Create User
        </Link>
      </div>

      <table className="w-full max-w-5xl mx-auto">
        <thead>
          <tr className="border-0 text-white text-sm">
            <th className="p-0 w-[200px] font-medium text-left">Player</th>
            <th className="p-0 w-[200px] font-medium text-left">E-mail</th>
            <th className="p-0 w-[20px] font-medium text-left">Points</th>
            <th className="p-0 w-[100px] font-medium text-end">
              <span className="flex justify-end items-center">Actions</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr className="border-b border-[#2b2b40] border-dashed">
              <td className="py-6 font-medium text-left">
                <div className="flex items-center space-x-4">
                  {user.avatarUrl && (
                    <Image
                      className="rounded-full aspect-square object-contain bg-black"
                      src={user.avatarUrl}
                      width={45}
                      height={45}
                      alt="img"
                    />
                  )}

                  <span className="text-sm text-white">{user.name}</span>
                </div>
              </td>

              <td className="py-6 px-0 font-medium text-left">
                <span className="text-sm text-white">{user.email}</span>
              </td>

              <td className="py-6 px-0 font-medium text-left">
                <span className="text-sm text-white">{user.points}</span>
                <span className="text-sm text-neutral-gray-tertiary ml-1">
                  CP
                </span>
              </td>

              <td className="py-6 px-0 text-end space-x-2">
                <Link
                  href={`/admin/users/${user.id}/edit`}
                  className="inline-block align-middle p-1.5 rounded-md bg-[#FFBF00] text-white hover:opacity-80"
                >
                  <PencilSquare />
                </Link>

                <button
                  disabled={isDeleting}
                  className="align-middle p-1.5 rounded-md bg-[#FF5733] text-white hover:opacity-80 disabled:bg-neutral-gray disabled:cursor-not-allowed"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  <Trash3Fill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminWrapper>
  );
}
