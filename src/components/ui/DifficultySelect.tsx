import ArrowDown from "@/icons/ArrowDown";
import { useState } from "react";
import DifficultyFlag from "./DifficultyFlag";
import { Difficulty } from "@/typings/challenge";

interface SelectProps {
  placeholder: string;
  selected?: Difficulty;
  options: Difficulty[];
  onSelect: (option: Difficulty) => void;
}

function Select({ placeholder, selected, options, onSelect }: SelectProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div
      className={`relative flex items-center w-full h-[46px] z-20 ${
        opened
          ? "bg-[#1b1b29] rounded-t-lg border-b-0"
          : "bg-[#1b1b29] rounded-lg"
      }`}
    >
      <button
        type="button"
        className={`flex justify-between items-center pl-4 pr-2 w-full h-[52px] cursor-pointer ${
          opened ? "border border-b-0 border-primary-light rounded-t-lg" : ""
        }`}
        onClick={() => setOpened(!opened)}
      >
        <span className="text-sm text-neutral-gray-tertiary">
          {selected ? <DifficultyFlag difficulty={selected} /> : placeholder}
        </span>

        <ArrowDown
          className={opened ? "rotate-180" : ""}
          width={24}
          height={24}
          color="#565674"
        />
      </button>

      <div
        className={`flex flex-col items-start w-full bg-[#1b1b29] border border-t-0 border-primary-light rounded-b-lg absolute top-full z-20 ${
          opened
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {options.map((option) => {
          if (option === selected) {
            return <></>;
          }

          return (
            <button
              type="button"
              key={option}
              className="flex justify-start items-center w-full h-[46px] px-4 hover:bg-[#212e48] hover:text-primary-100 last:rounded-b-lg"
              onClick={() => {
                setOpened(false);
                onSelect(option);
              }}
            >
              <DifficultyFlag difficulty={option} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Select;
