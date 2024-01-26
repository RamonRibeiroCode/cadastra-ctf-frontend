import { FormEvent, useEffect, useState } from "react";
import ProfileInput from "./ui/ProfileInput";
import api from "@/services/api";
import { CreatedOrEditChallenge } from "@/app/(pages)/admin/challenges/page";
import { Difficulty } from "@/typings/challenge";

interface ChallengeFormProps {
  type: "EDIT" | "CREATE";
  challengeId?: number;
  onSubmit: (challenge: CreatedOrEditChallenge) => void;
}

export default function ChallengeForm({
  type,
  challengeId,
  onSubmit,
}: Readonly<ChallengeFormProps>) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [url, setUrl] = useState("");
  const [releaseAt, setReleaseAt] = useState("");

  const [defaultChallenge, setDefaultChallenge] =
    useState<CreatedOrEditChallenge | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const flags = [
      {
        flag: "M3-CTF{Broken_Object_Level_Authorization",
        difficulty: "EASY" as Difficulty,
        points: 30,
      },
    ];

    onSubmit({ name, description, difficulty, url, releaseAt, flags });
  };

  const getDefaultChallenge = async () => {
    if (type !== "EDIT" || !challengeId) {
      return;
    }

    const response = await api.get<CreatedOrEditChallenge>(
      `/admin/challenges/${challengeId}`
    );

    const challenge = response.data;

    if (response) {
      setName(challenge.name);
      setDescription(challenge.description);
      setDifficulty(challenge.difficulty);
      setDefaultChallenge(challenge);
    }
  };

  const getIFButtonShouldBeEnabled = () => {
    let buttonShouldBeEnabled = false;

    if (type === "EDIT") {
      const isEditingChallenge =
        defaultChallenge &&
        (name !== defaultChallenge.name ||
          description !== defaultChallenge.description ||
          difficulty !== defaultChallenge.difficulty ||
          url !== defaultChallenge.url ||
          releaseAt !== defaultChallenge.releaseAt);

      buttonShouldBeEnabled = isEditingChallenge;
    }

    if (type === "CREATE") {
      const allFieldsAreFilled = Boolean(name && description);

      buttonShouldBeEnabled = allFieldsAreFilled;
    }

    return buttonShouldBeEnabled;
  };

  useEffect(() => {
    getDefaultChallenge();
  }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="max-w-3xl">
      <div className="mb-4">
        <ProfileInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </div>

      <div className="mb-4">
        <ProfileInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>

      <div className="mb-4">
        <ProfileInput
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as Difficulty)}
          placeholder="Difficulty"
        />
      </div>

      <div className="mb-4">
        <ProfileInput
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Url"
        />
      </div>

      <div className="mb-4">
        <ProfileInput
          value={releaseAt}
          onChange={(e) => setReleaseAt(e.target.value)}
          placeholder="Release At"
        />
      </div>

      <button
        type="submit"
        disabled={!getIFButtonShouldBeEnabled()}
        className="flex justify-center items-center w-[168px] h-[42px] rounded-md transition-all bg-[#3699ff] hover:bg-[#187de4] disabled:bg-neutral-gray disabled:cursor-not-allowed text-sm font-medium text-white"
      >
        {type === "CREATE" && "Criar Challenge"}
        {type === "EDIT" && "Salvar Alterações"}
      </button>
    </form>
  );
}
