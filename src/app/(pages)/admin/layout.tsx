"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();

  // Keep in useEffect to prevent error in NextJs Router
  useEffect(() => {
    if (user.role !== "ADMIN") {
      return redirect("/");
    }
  }, [user.role]);

  return children;
}
