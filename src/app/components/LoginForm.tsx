"use client";

import { FormEvent, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { handleError } from "../helpers/error";
import EyeFill from "../icons/EyeFill";
import EyeSlashFill from "../icons/EyeSlashFill";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [passwordInputType, setPasswordInputType] = useState<
    "text" | "password"
  >("password");

  const { handleLogin: login } = useAuth();
  const { push } = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");

    try {
      await login(email, password);

      push("/");
    } catch (err) {
      const { message } = handleError(err);

      console.log(message);

      setErrorMessage(message);
    }
  };

  const handlePasswordInputTypeChange = () => {
    switch (passwordInputType) {
      case "password":
        return setPasswordInputType("text");

      case "text":
        return setPasswordInputType("password");

      default:
        break;
    }
  };

  return (
    <form className="w-full" onSubmit={handleLogin}>
      <div>
        <label
          className="block text-sm text-neutral-gray-secondary mb-[2px]"
          htmlFor=""
        >
          E-mail
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border border-primary-light rounded-md px-5 py-2 outline-none text-sm text-white"
          type="email"
          required
        />
      </div>

      <div className="mt-6 mb-3">
        <label
          className="block text-sm text-neutral-gray-secondary mb-[2px]"
          htmlFor=""
        >
          Password
        </label>

        <div className="relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent border border-primary-light rounded-md pl-5 pr-16 py-2 outline-none text-sm text-white"
            type={passwordInputType}
            required
          />

          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
            onClick={handlePasswordInputTypeChange}
          >
            {passwordInputType === "password" && <EyeFill />}
            {passwordInputType === "text" && <EyeSlashFill />}
          </button>
        </div>
      </div>

      {errorMessage && (
        <span className="block text-sm text-center text-[#f64e60]">
          {errorMessage}
        </span>
      )}

      <button
        type="submit"
        className="w-full h-[46px] mt-3 bg-neutral-gray-senary text-neutral-gray-secondary rounded-lg hover:bg-neutral-gray-quaternary"
      >
        Entrar
      </button>
    </form>
  );
}
