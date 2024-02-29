"use client";

import ArrowReturnLeft from "@/icons/ArrowReturnLeft";
import { useRouter } from "next/navigation";

interface AdminWrapperProps {
  backHref: string;
  children: React.ReactNode;
}

export default function AdminWrapper({
  backHref,
  children,
}: AdminWrapperProps) {
  const { push } = useRouter();

  return (
    <div className="p-8">
      <button
        onClick={() => push(backHref)}
        className="flex items-center space-x-2 text-primary-blue mb-4"
      >
        <ArrowReturnLeft />
        <span>Voltar</span>
      </button>

      {children}
    </div>
  );
}
