import { InputHTMLAttributes } from "react";

export interface ProfileInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

export default function ProfileInput({
  errorMessage,
  ...props
}: ProfileInputProps) {
  return (
    <div className="block w-full">
      <input
        className="w-full h-[46px] bg-[#1b1b29] px-5 py-[10px] rounded-lg outline-none text-sm text-[#92929f] placeholder:text-neutral-gray-tertiary"
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
