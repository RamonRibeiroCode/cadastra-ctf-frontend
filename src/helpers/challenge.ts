import { Difficulty } from "@/typings/challenge";

export const getChallengeDifficultyColor = (difficulty: Difficulty) => {
  switch (difficulty) {
    case "EASY":
      return "#0bb783";

    case "MEDIUM":
      return "#8950fc";

    case "HARD":
      return "#ffa800";

    case "INSANE":
      return "#f64e60";

    default:
      return "#0bb783";
  }
};

export const getChallengeDifficultyBackground = (difficulty: Difficulty) => {
  switch (difficulty) {
    case "EASY":
      return "#1c3238";

    case "MEDIUM":
      return "#2f264f";

    case "HARD":
      return "#392f28";

    case "INSANE":
      return "#3a2434";

    default:
      return "#1c3238";
  }
};

export const getChallengeDifficultyLabel = (difficulty: Difficulty) => {
  switch (difficulty) {
    case "EASY":
      return "Fácil";

    case "MEDIUM":
      return "Médio";

    case "HARD":
      return "Difícil";

    case "INSANE":
      return "Insano";

    default:
      return "Fácil";
  }
};
