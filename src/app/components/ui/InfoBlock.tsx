import { ReactNode } from "react";

interface InfoBlockProps {
  children: ReactNode;
}

export default function InfoBlock({ children }: InfoBlockProps) {
  return (
    <div className="w-fit border border-neutral-gray-light border-dashed rounded min-w-[125px] py-3 px-4 mb-3">
      {children}
    </div>
  );
}
