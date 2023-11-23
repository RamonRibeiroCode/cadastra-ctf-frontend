export interface ScoreboardResponse {
  scoreboard: ScoreboardUser[];
  maxPoints: number;
}

export interface ScoreboardUser {
  name: string;
  points: number;
  firstBloods: number;
  avatarUrl: string;
}
