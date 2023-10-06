"use client";

import { useEffect } from "react";

import SideBar from "@/components/layout/SideBar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { redirect } from "next/navigation";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, loading } = useAuth();

  // Keep in useEffect to prevent error in NextJs Router
  useEffect(() => {
    if (!isAuthenticated && !loading) {
      return redirect("/login");
    }
  }, [isAuthenticated, loading]);

  return (
    <div className="flex min-h-screen bg-primary-default">
      {isAuthenticated && !loading && (
        <>
          <SideBar />

          <div className="flex flex-col flex-1">
            <TopBar />

            <main className="bg-primary-dark flex-1">{children}</main>

            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
