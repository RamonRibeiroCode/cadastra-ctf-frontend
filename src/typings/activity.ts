import { Difficulty } from "./challenge";

export interface ActivityResponse {
  activities: Activity[];
}

export interface Activity {
  executionTime: number;
  createdAt: string;
  flag: ActivityFlag;
  user: ActivityUser;
}

interface ActivityFlag {
  points: number;
  difficulty: Difficulty;
  challenge: {
    name: string;
  };
}

interface ActivityUser {
  name: string;
  points: number;
  avatarUrl: string;
}
