import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export default function Input({ errorMessage, ...props }: InputProps) {
  return (
    <div className="block w-full">
      <input
        className="w-full h-[46px] bg-[#1b1b29] px-5 py-[10px] rounded-lg outline-none text-sm text-[#92929f] focus:border border-primary-light placeholder:text-neutral-gray-tertiary"
        maxLength={32}
        {...props}
      />

      {errorMessage && (
        <span className="block mt-1 text-sm font-medium text-[#f64e60]">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
