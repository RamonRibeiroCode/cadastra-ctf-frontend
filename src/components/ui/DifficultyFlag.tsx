import {
  getChallengeDifficultyBackground,
  getChallengeDifficultyColor,
  getChallengeDifficultyLabel,
} from "@/helpers/challenge";
import { Difficulty } from "@/mocks/challenges";

interface DifficultyFlagProps {
  difficulty: Difficulty;
}

export default function DifficultyFlag({ difficulty }: DifficultyFlagProps) {
  return (
    <div
      className="flex w-fit px-1.5 py-0.5 rounded text-[11px] font-semibold"
      style={{
        color: getChallengeDifficultyColor(difficulty),
        backgroundColor: getChallengeDifficultyBackground(difficulty),
      }}
    >
      {getChallengeDifficultyLabel(difficulty)}
    </div>
  );
}
