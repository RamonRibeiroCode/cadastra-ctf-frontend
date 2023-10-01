interface ChallengeListItem {
  id: number;
  difficulty: Difficulty;
  iconUrl: string;
  title: string;
  releaseDate: string;
  xp: number;
  creatorIconUrl: string;
  firstBlood: ChallengeFirstBlood;
}

export type Difficulty = "easy" | "medium" | "hard" | "insane";

interface ChallengeFirstBlood {
  iconUrl: string;
}

export const challengesMock: ChallengeListItem[] = [
  {
    id: 1,
    difficulty: "easy",
    iconUrl: "https://assets.hackingclub.com/machine/avatar/cerebro.png",
    title: "Sanity Check",
    releaseDate: "2023-08-21T15:00:00.000000Z",
    xp: 20,
    creatorIconUrl:
      "https://app.safecodeweek.com.br/media/logos/crowsec-edtech.jpg",
    firstBlood: {
      iconUrl: "https://assets.hackingclub.com/user/avatar/64ff03de5940f",
    },
  },
  {
    id: 2,
    difficulty: "medium",
    iconUrl:
      "https://assets.hackingclub.com/user/avatar/86203505764e5e2ed5b65e4.46030630",
    title: "Spring",
    releaseDate: "2023-09-13T12:35:00.000000Z",
    xp: 450,
    creatorIconUrl:
      "https://app.safecodeweek.com.br/media/logos/crowsec-edtech.jpg",
    firstBlood: {
      iconUrl: "https://assets.hackingclub.com/user/avatar/64ff03d1556b3",
    },
  },
  {
    id: 3,
    difficulty: "insane",
    iconUrl:
      "https://assets.hackingclub.com/user/avatar/135871330064e89d3da8e655.64690455",
    title: "Carrefour",
    releaseDate: "2023-09-15T12:30:00.000000Z",
    xp: 500,
    creatorIconUrl:
      "https://app.safecodeweek.com.br/media/logos/crowsec-edtech.jpg",
    firstBlood: {
      iconUrl: "https://assets.hackingclub.com/user/avatar/64ff03d1556b3",
    },
  },
  {
    id: 4,
    difficulty: "hard",
    iconUrl: "https://assets.hackingclub.com/machine/avatar/Searchengine.png",
    title: "Search Engine",
    releaseDate: "2023-09-14T12:55:00.000000Z",
    xp: 500,
    creatorIconUrl:
      "https://app.safecodeweek.com.br/media/logos/crowsec-edtech.jpg",
    firstBlood: {
      iconUrl: "https://assets.hackingclub.com/user/avatar/64ff09143f724",
    },
  },
];
