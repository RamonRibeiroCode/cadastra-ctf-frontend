export interface ChallengeListItem {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
  difficulty: Difficulty;
  releaseAt: string;
  createdAt: string;
  updatedAt: string;
  imageUrl: string;
  firstBlood?: FirstBloodList;
  flags: Flag[];
}

interface Flag {
  points: number;
}

interface FirstBloodList {
  avatarUrl: string;
}

export type Difficulty = "EASY" | "MEDIUM" | "HARD" | "INSANE";
