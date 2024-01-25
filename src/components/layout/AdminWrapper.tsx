"use client";

import ArrowReturnLeft from "@/icons/ArrowReturnLeft";
import { useRouter } from "next/navigation";

interface AdminWrapperProps {
  children: React.ReactNode;
}

export default function AdminWrapper({ children }: AdminWrapperProps) {
  const { back } = useRouter();

  return (
    <div className="p-8">
      <button
        onClick={back}
        className="flex items-center space-x-2 text-primary-blue mb-4"
      >
        <ArrowReturnLeft />
        <span>Voltar</span>
      </button>

      {children}
    </div>
  );
}
