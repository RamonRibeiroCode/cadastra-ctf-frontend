import { Difficulty } from "@/mocks/challenges";

export const getChallengeDifficultyColor = (difficulty: Difficulty) => {
  switch (difficulty) {
    case "easy":
      return "#0bb783";

    case "medium":
      return "#8950fc";

    case "hard":
      return "#ffa800";

    case "insane":
      return "#f64e60";

    default:
      return "#0bb783";
  }
};

export const getChallengeDifficultyBackground = (difficulty: Difficulty) => {
  switch (difficulty) {
    case "easy":
      return "#1c3238";

    case "medium":
      return "#2f264f";

    case "hard":
      return "#392f28";

    case "insane":
      return "#3a2434";

    default:
      return "#1c3238";
  }
};

export const getChallengeDifficultyLabel = (difficulty: Difficulty) => {
  switch (difficulty) {
    case "easy":
      return "Fácil";

    case "medium":
      return "Médio";

    case "hard":
      return "Difícil";

    case "insane":
      return "Insano";

    default:
      return "Fácil";
  }
};
