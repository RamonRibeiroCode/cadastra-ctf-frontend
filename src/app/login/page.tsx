"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

import LoginForm from "@/components/LoginForm";
import { useAuth } from "@/contexts/AuthContext";
import CadastraLogo from "@/icons/CadastraLogo";

export default function Login() {
  const { isAuthenticated, loading } = useAuth();

  // Keep in useEffect to prevent rrror in NextJs Router
  useEffect(() => {
    if (isAuthenticated && !loading) {
      return redirect("/");
    }
  }, [isAuthenticated, loading]);

  return (
    <main className="bg-primary-default min-h-screen flex flex-col justify-between items-center">
      {!loading && !isAuthenticated && (
        <>
          <div className="flex flex-col items-center justify-center flex-1 w-full max-w-[500px]">
            <div className="flex justify-center">
              <CadastraLogo />
            </div>

            <div className="flex flex-col items-center w-full mt-8 p-12 mx-auto bg-[rgb(23_23_34_/_98%)] rounded-md">
              <span className="block text-white text-center text-2xl font-semibold">
                Faça login no Cadastra CTF
              </span>

              <span className="block my-7 text-neutral-gray-tertiary text-center text-sm font-semibold">
                FAÇA LOGIN UTILIZANDO SUA CONTA
              </span>

              <LoginForm />
            </div>
          </div>

          <div className="flex justify-center items-center w-full h-11 bg-primary-default mb-6">
            <span className="text-sm text-neutral-gray-tertiary">2023©</span>
            <span className="text-sm text-white mx-1">Cadastra CTF</span>
            <span className="text-sm text-neutral-gray-senary">
              Powered by RIP Squad C4
            </span>
          </div>
        </>
      )}
    </main>
  );
}
