export interface ChallengeListItem {
  id: number;
  name: string;
  description: string;
  image: string;
  url?: string;
  difficulty: Difficulty;
  releaseAt: string;
  createdAt: string;
  updatedAt: string;
  imageUrl: string;
  firstBlood?: FirstBloodList;
  flags: FlagList[];
}

interface FlagList {
  points: number;
}

interface FirstBloodList {
  avatarUrl: string;
}

export type Difficulty = "EASY" | "MEDIUM" | "HARD" | "INSANE";

export interface ChallengeDetail {
  id: number;
  name: string;
  description: string;
  url?: string;
  difficulty: Difficulty;
  releaseAt: string;
  imageUrl: string;
  firstBlood?: FirstBloodDetail;
  flags: FlagDetail[];
  scoreboard: ScoreboardDetail[];
}

interface FirstBloodDetail {
  name: string;
  avatarUrl: string;
}

interface FlagDetail {
  points: number;
  activities: ActivityDetail[];
}

export interface ActivityDetail {
  createdAt: string;
  user: ActivityUser;
  flag: FlagActivityDetail;
}

interface ActivityUser {
  id: number;
  name: string;
  avatarUrl: string;
}

export interface ScoreboardDetail {
  user: ScoreboardDetailUser;
  executionTime: number;
}

interface ScoreboardDetailUser {
  name: string;
  avatarUrl: string;
}

interface FlagActivityDetail {
  difficulty: Difficulty;
  points: number;
}
