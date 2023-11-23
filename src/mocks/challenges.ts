import { Difficulty } from "@/typings/challenge";

interface ChallengeListItem {
  id: number;
  difficulty: Difficulty;
  iconUrl: string;
  title: string;
  releaseDate: string;
  xp: number;
  creatorIconUrl: string;
  description: string;
  firstBlood: ChallengeFirstBlood;
  scoreboard: ChallengeScoreboard[];
  activities: ChallengeActivity[];
}

interface ChallengeFirstBlood {
  name: string;
  iconUrl: string;
}

interface ChallengeScoreboard {
  time_to_complete: number;
  user: ChallengeUser;
}

interface ChallengeUser {
  name: string;
  nick: string;
  level: number;
  xp: number;
  avatar: string;
}

interface ChallengeActivity {
  id: number;
  created_at: string;
  flag: ChallengeActivityFlag;
  user: ChallengeUserActivity;
}

interface ChallengeUserActivity {
  name: string;
  nick: string;
  avatar: string;
}

interface ChallengeActivityFlag {
  dificulty: Difficulty;
  points: number;
}

const defaultActivities: ChallengeActivity[] = [
  {
    id: 546,
    created_at: "2023-09-15T20:18:10.000000Z",
    user: {
      name: "MARCELO RODRIGUES EXT",
      nick: "marcelo_rodrigues_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/6500d8d348094",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 479,
    created_at: "2023-09-13T19:22:58.000000Z",
    user: {
      name: "JOS\u00c9 JUNIOR EXT",
      nick: "jose_junior_ext_4",
      avatar: "https://assets.hackingclub.com/user/avatar/65018a641eae9",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 404,
    created_at: "2023-09-12T20:22:38.000000Z",
    user: {
      name: "FRANCISCA COSTA EXT",
      nick: "francisca_costa_ext_2",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff051bdac16",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 403,
    created_at: "2023-09-12T19:19:47.000000Z",
    user: {
      name: "RAISA ALMEIDA EXT",
      nick: "raisa_almeida_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff05ba00ebc",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 400,
    created_at: "2023-09-12T18:19:53.000000Z",
    user: {
      name: "KLEBER CARVALHO EXT",
      nick: "kleber_carvalho_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff10549b98a",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 398,
    created_at: "2023-09-12T17:52:44.000000Z",
    user: {
      name: "ADILSON BASSANI",
      nick: "adilson_bassani",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03daeabbe",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 394,
    created_at: "2023-09-12T13:49:32.000000Z",
    user: {
      name: "GISELY ARA\u00daJO EXT",
      nick: "gisely_araujo_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff10510337a",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 393,
    created_at: "2023-09-12T13:45:31.000000Z",
    user: {
      name: "CAROLINA MEDEIROS EXT",
      nick: "carolina_medeiros_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff109652b80",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 392,
    created_at: "2023-09-12T13:44:56.000000Z",
    user: {
      name: "ALINE SILVA EXT",
      nick: "aline_silva_ext_3",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03daa449e",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 384,
    created_at: "2023-09-12T13:22:49.000000Z",
    user: {
      name: "GUSTAVO AMEMIYA EXT",
      nick: "gustavo_amemiya_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03d1556b3",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 383,
    created_at: "2023-09-12T13:22:39.000000Z",
    user: {
      name: "JADSON SILVA",
      nick: "jadson_silva_6",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03dcd2d06",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 381,
    created_at: "2023-09-12T13:20:54.000000Z",
    user: {
      name: "BRUNO ALMEIDA EXT",
      nick: "bruno_almeida_ext_1",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03cf6b062",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 380,
    created_at: "2023-09-12T13:20:26.000000Z",
    user: {
      name: "Aline Oliveira",
      nick: "aline_oliveira_ext_3",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03cdacbc9",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 378,
    created_at: "2023-09-12T13:20:16.000000Z",
    user: {
      name: "MARCELO OLIVEIRA EXT",
      nick: "marcelo_oliveira_ext_2",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff041398320",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 375,
    created_at: "2023-09-12T13:13:26.000000Z",
    user: {
      name: "BRYAN BRITO EXT",
      nick: "bryan_brito_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03d13b15c",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 374,
    created_at: "2023-09-12T13:13:25.000000Z",
    user: {
      name: "ARTHUR ABREU EXT",
      nick: "arthur_abreu_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03d41e35d",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 373,
    created_at: "2023-09-12T13:11:47.000000Z",
    user: {
      name: "FABIO PAULINO",
      nick: "fabio_paulino_1",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03ec1a9c8",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 372,
    created_at: "2023-09-12T13:11:42.000000Z",
    user: {
      name: "MATHEUS PELUCHI EXT",
      nick: "matheus_peluchi_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/65005bce5c44c",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 370,
    created_at: "2023-09-12T13:10:49.000000Z",
    user: {
      name: "PEDRO SILVA EXT",
      nick: "pedro_silva_ext_1",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff0425a76e4",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 369,
    created_at: "2023-09-12T13:10:02.000000Z",
    user: {
      name: "OTAVIO CAPELOS EXT",
      nick: "otavio_capelos_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff08d126836",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 368,
    created_at: "2023-09-12T13:08:22.000000Z",
    user: {
      name: "VANDERSON FARIAS EXT",
      nick: "vanderson_farias_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff09143f724",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 365,
    created_at: "2023-09-12T13:06:55.000000Z",
    user: {
      name: "CAIO RIBEIRO EXT",
      nick: "caio_ribeiro_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03d508677",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 363,
    created_at: "2023-09-12T13:05:50.000000Z",
    user: {
      name: "RAMON RAMOS EXT",
      nick: "ramon_ramos_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03c8cd855",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 361,
    created_at: "2023-09-12T13:04:52.000000Z",
    user: {
      name: "MARLONN CARVALHOSA EXT",
      nick: "marlonn_carvalhosa_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff04671f21a",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 359,
    created_at: "2023-09-12T13:02:45.000000Z",
    user: {
      name: "PAULO JUNIOR EXT",
      nick: "paulo_junior_ext_4",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff050362552",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 357,
    created_at: "2023-09-12T12:59:22.000000Z",
    user: {
      name: "DAVI GUIMAR\u00c3ES EXT",
      nick: "davi_guimaraes_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03de5940f",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 356,
    created_at: "2023-09-12T12:58:54.000000Z",
    user: {
      name: "GUILHERME CUNHA EXT",
      nick: "guilherme_cunha_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03e15ccd1",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 355,
    created_at: "2023-09-12T12:57:46.000000Z",
    user: {
      name: "GABRIEL FELICIANO EXT",
      nick: "gabriel_feliciano_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03dc533bb",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 354,
    created_at: "2023-09-12T12:57:43.000000Z",
    user: {
      name: "ESTER VERLY EXT",
      nick: "ester_verly_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03d3d6b43",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
  {
    id: 353,
    created_at: "2023-09-12T12:57:21.000000Z",
    user: {
      name: "ARTHUR CARDOSO EXT",
      nick: "arthur_cardoso_ext",
      avatar: "https://assets.hackingclub.com/user/avatar/64ff03f019305",
    },
    flag: {
      dificulty: "EASY",
      points: 150,
    },
  },
];

export const challengesMock: ChallengeListItem[] = [
  {
    id: 1,
    difficulty: "EASY",
    iconUrl: "https://assets.hackingclub.com/machine/avatar/cerebro.png",
    title: "Sanity Check",
    releaseDate: "2023-08-21T15:00:00.000000Z",
    xp: 20,
    description: "Acesse o feed da plataforma e pegue a flag no primeiro post.",
    creatorIconUrl:
      "https://app.safecodeweek.com.br/media/logos/crowsec-edtech.jpg",
    firstBlood: {
      name: "DAVI GUIMARÃES EXT",
      iconUrl: "https://assets.hackingclub.com/user/avatar/64ff03de5940f",
    },
    scoreboard: [
      {
        user: {
          name: "ARTHUR CARDOSO EXT",
          nick: "arthur_cardoso_ext",
          level: 2,
          xp: 85,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03f019305",
        },
        time_to_complete: 141,
      },
      {
        user: {
          name: "ESTER VERLY EXT",
          nick: "ester_verly_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03d3d6b43",
        },
        time_to_complete: 163,
      },
      {
        user: {
          name: "GABRIEL FELICIANO EXT",
          nick: "gabriel_feliciano_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03dc533bb",
        },
        time_to_complete: 166,
      },
      {
        user: {
          name: "GUILHERME CUNHA EXT",
          nick: "guilherme_cunha_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03e15ccd1",
        },
        time_to_complete: 234,
      },
      {
        user: {
          name: "DAVI GUIMAR\u00c3ES EXT",
          nick: "davi_guimaraes_ext",
          level: 2,
          xp: 72,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03de5940f",
        },
        time_to_complete: 262,
      },
      {
        user: {
          name: "PAULO JUNIOR EXT",
          nick: "paulo_junior_ext_4",
          level: 0,
          xp: 620,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff050362552",
        },
        time_to_complete: 465,
      },
      {
        user: {
          name: "MARLONN CARVALHOSA EXT",
          nick: "marlonn_carvalhosa_ext",
          level: 1,
          xp: 570,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff04671f21a",
        },
        time_to_complete: 592,
      },
      {
        user: {
          name: "RAMON RAMOS EXT",
          nick: "ramon_ramos_ext",
          level: 2,
          xp: 150,

          avatar: "https://assets.hackingclub.com/user/avatar/64ff04671f21a",
        },
        time_to_complete: 650,
      },
      {
        user: {
          name: "CAIO RIBEIRO EXT",
          nick: "caio_ribeiro_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03d508677",
        },
        time_to_complete: 715,
      },
      {
        user: {
          name: "VANDERSON FARIAS EXT",
          nick: "vanderson_farias_ext",
          level: 2,
          xp: 120,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff09143f724",
        },
        time_to_complete: 802,
      },
    ],
    activities: defaultActivities,
  },
  {
    id: 2,
    difficulty: "MEDIUM",
    iconUrl:
      "https://assets.hackingclub.com/user/avatar/86203505764e5e2ed5b65e4.46030630",
    title: "Spring",
    releaseDate: "2023-09-13T12:35:00.000000Z",
    xp: 450,
    description:
      "Nossa equipe de segurança identificou alguns endpoints expostos em nosso aplicativo spring, você pode nos ajudar a identificá-los?",
    creatorIconUrl:
      "https://app.safecodeweek.com.br/media/logos/crowsec-edtech.jpg",
    firstBlood: {
      name: "",
      iconUrl: "https://assets.hackingclub.com/user/avatar/64ff03d1556b3",
    },
    scoreboard: [
      {
        user: {
          name: "ARTHUR CARDOSO EXT",
          nick: "arthur_cardoso_ext",
          level: 2,
          xp: 85,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03f019305",
        },
        time_to_complete: 141,
      },
      {
        user: {
          name: "ESTER VERLY EXT",
          nick: "ester_verly_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03d3d6b43",
        },
        time_to_complete: 163,
      },
      {
        user: {
          name: "GABRIEL FELICIANO EXT",
          nick: "gabriel_feliciano_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03dc533bb",
        },
        time_to_complete: 166,
      },
      {
        user: {
          name: "GUILHERME CUNHA EXT",
          nick: "guilherme_cunha_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03e15ccd1",
        },
        time_to_complete: 234,
      },
      {
        user: {
          name: "DAVI GUIMAR\u00c3ES EXT",
          nick: "davi_guimaraes_ext",
          level: 2,
          xp: 72,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03de5940f",
        },
        time_to_complete: 262,
      },
      {
        user: {
          name: "PAULO JUNIOR EXT",
          nick: "paulo_junior_ext_4",
          level: 0,
          xp: 620,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff050362552",
        },
        time_to_complete: 465,
      },
      {
        user: {
          name: "MARLONN CARVALHOSA EXT",
          nick: "marlonn_carvalhosa_ext",
          level: 1,
          xp: 570,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff04671f21a",
        },
        time_to_complete: 592,
      },
      {
        user: {
          name: "RAMON RAMOS EXT",
          nick: "ramon_ramos_ext",
          level: 2,
          xp: 150,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff04671f21a",
        },
        time_to_complete: 650,
      },
      {
        user: {
          name: "CAIO RIBEIRO EXT",
          nick: "caio_ribeiro_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03d508677",
        },
        time_to_complete: 715,
      },
      {
        user: {
          name: "VANDERSON FARIAS EXT",
          nick: "vanderson_farias_ext",
          level: 2,
          xp: 120,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff09143f724",
        },
        time_to_complete: 802,
      },
    ],
    activities: defaultActivities,
  },
  {
    id: 3,
    difficulty: "INSANE",
    iconUrl:
      "https://assets.hackingclub.com/user/avatar/135871330064e89d3da8e655.64690455",
    title: "Carrefour",
    releaseDate: "2023-09-15T12:30:00.000000Z",
    xp: 500,
    description: "Ache a flag!",
    creatorIconUrl:
      "https://app.safecodeweek.com.br/media/logos/crowsec-edtech.jpg",
    firstBlood: {
      name: "RAMON RAMOS EXT",
      iconUrl: "https://assets.hackingclub.com/user/avatar/64ff03d1556b3",
    },
    scoreboard: [
      {
        user: {
          name: "ARTHUR CARDOSO EXT",
          nick: "arthur_cardoso_ext",
          level: 2,
          xp: 85,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03f019305",
        },
        time_to_complete: 141,
      },
      {
        user: {
          name: "ESTER VERLY EXT",
          nick: "ester_verly_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03d3d6b43",
        },
        time_to_complete: 163,
      },
      {
        user: {
          name: "GABRIEL FELICIANO EXT",
          nick: "gabriel_feliciano_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03dc533bb",
        },
        time_to_complete: 166,
      },
      {
        user: {
          name: "GUILHERME CUNHA EXT",
          nick: "guilherme_cunha_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03e15ccd1",
        },
        time_to_complete: 234,
      },
      {
        user: {
          name: "DAVI GUIMAR\u00c3ES EXT",
          nick: "davi_guimaraes_ext",
          level: 2,
          xp: 72,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03de5940f",
        },
        time_to_complete: 262,
      },
      {
        user: {
          name: "PAULO JUNIOR EXT",
          nick: "paulo_junior_ext_4",
          level: 0,
          xp: 620,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff050362552",
        },
        time_to_complete: 465,
      },
      {
        user: {
          name: "MARLONN CARVALHOSA EXT",
          nick: "marlonn_carvalhosa_ext",
          level: 1,
          xp: 570,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff04671f21a",
        },
        time_to_complete: 592,
      },
      {
        user: {
          name: "RAMON RAMOS EXT",
          nick: "ramon_ramos_ext",
          level: 2,
          xp: 150,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff04671f21a",
        },
        time_to_complete: 650,
      },
      {
        user: {
          name: "CAIO RIBEIRO EXT",
          nick: "caio_ribeiro_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03d508677",
        },
        time_to_complete: 715,
      },
      {
        user: {
          name: "VANDERSON FARIAS EXT",
          nick: "vanderson_farias_ext",
          level: 2,
          xp: 120,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff09143f724",
        },
        time_to_complete: 802,
      },
    ],
    activities: defaultActivities,
  },
  {
    id: 4,
    difficulty: "HARD",
    iconUrl: "https://assets.hackingclub.com/machine/avatar/Searchengine.png",
    title: "Search Engine",
    releaseDate: "2023-09-14T12:55:00.000000Z",
    xp: 500,
    description:
      "Nossa equipe de desenvolvimento criou um novo mecanismo de busca ultrarrápido, mas acreditamos que há uma falha de segurança na busca do Mercado.",
    creatorIconUrl:
      "https://app.safecodeweek.com.br/media/logos/crowsec-edtech.jpg",
    firstBlood: {
      name: "VANDERSON FARIAS EXT",
      iconUrl: "https://assets.hackingclub.com/user/avatar/64ff09143f724",
    },
    scoreboard: [
      {
        user: {
          name: "ARTHUR CARDOSO EXT",
          nick: "arthur_cardoso_ext",
          level: 2,
          xp: 85,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03f019305",
        },
        time_to_complete: 141,
      },
      {
        user: {
          name: "ESTER VERLY EXT",
          nick: "ester_verly_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03d3d6b43",
        },
        time_to_complete: 163,
      },
      {
        user: {
          name: "GABRIEL FELICIANO EXT",
          nick: "gabriel_feliciano_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03dc533bb",
        },
        time_to_complete: 166,
      },
      {
        user: {
          name: "GUILHERME CUNHA EXT",
          nick: "guilherme_cunha_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03e15ccd1",
        },
        time_to_complete: 234,
      },
      {
        user: {
          name: "DAVI GUIMAR\u00c3ES EXT",
          nick: "davi_guimaraes_ext",
          level: 2,
          xp: 72,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03de5940f",
        },
        time_to_complete: 262,
      },
      {
        user: {
          name: "PAULO JUNIOR EXT",
          nick: "paulo_junior_ext_4",
          level: 0,
          xp: 620,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff050362552",
        },
        time_to_complete: 465,
      },
      {
        user: {
          name: "MARLONN CARVALHOSA EXT",
          nick: "marlonn_carvalhosa_ext",
          level: 1,
          xp: 570,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff04671f21a",
        },
        time_to_complete: 592,
      },
      {
        user: {
          name: "RAMON RAMOS EXT",
          nick: "ramon_ramos_ext",
          level: 2,
          xp: 150,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff04671f21a",
        },
        time_to_complete: 650,
      },
      {
        user: {
          name: "CAIO RIBEIRO EXT",
          nick: "caio_ribeiro_ext",
          level: 2,
          xp: 70,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff03d508677",
        },
        time_to_complete: 715,
      },
      {
        user: {
          name: "VANDERSON FARIAS EXT",
          nick: "vanderson_farias_ext",
          level: 2,
          xp: 120,
          avatar: "https://assets.hackingclub.com/user/avatar/64ff09143f724",
        },
        time_to_complete: 802,
      },
    ],
    activities: defaultActivities,
  },
];
