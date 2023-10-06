import { ReactNode } from "react";

interface InfoBlockProps {
  children?: ReactNode;
  extraClasses?: string;
}

export default function InfoBlock({ children, extraClasses }: InfoBlockProps) {
  return (
    <div
      className={`w-fit border border-neutral-gray-senary border-dashed rounded py-3 px-4 ${extraClasses}`}
    >
      {children}
    </div>
  );
}
