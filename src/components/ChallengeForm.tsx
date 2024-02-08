import { FormEvent, useEffect, useState } from "react";
import ProfileInput from "./ui/ProfileInput";
import api from "@/services/api";
import { CreatedOrEditChallenge } from "@/app/(pages)/admin/challenges/page";
import { Difficulty } from "@/typings/challenge";
import { uuid } from "uuidv4";
import Plus from "@/icons/Plus";
import Trash3Fill from "@/icons/Trash3Fill";

interface ChallengeFormProps {
  type: "EDIT" | "CREATE";
  challengeId?: number;
  onSubmit: (challenge: CreatedOrEditChallenge) => void;
}

interface AdminFlag {
  flag: string;
  difficulty: Difficulty;
  points: number;
}

interface CreateOrEditAdminFlag extends AdminFlag {
  id: string;
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
  const [flags, setFlags] = useState<CreateOrEditAdminFlag[]>([
    { id: uuid(), difficulty: "EASY", flag: "", points: 0 },
  ]);

  const [defaultChallenge, setDefaultChallenge] =
    useState<CreatedOrEditChallenge | null>(null);

  const allFieldsAreFilled = Boolean(name && description);

  const oneFlagWasAddedAndAllFilled =
    flags.length > 0 &&
    flags.every((flag) => flag.flag && flag.points && flag.difficulty);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({ name, description, difficulty, url, releaseAt, flags });
  };

  const getIFButtonShouldBeEnabled = () => {
    let buttonShouldBeEnabled = false;

    if (type === "EDIT") {
      if (!defaultChallenge) {
        return false;
      }

      const isEditingChallenge =
        name !== defaultChallenge.name ||
        description !== defaultChallenge.description ||
        difficulty !== defaultChallenge.difficulty ||
        url !== defaultChallenge.url ||
        releaseAt !== defaultChallenge.releaseAt;

      let isEditingSomeFlag = false;

      if (flags.length) {
        if (defaultChallenge.flags.length !== flags.length) {
          isEditingSomeFlag = true;
        } else {
          const someFlagWasEdited = flags?.some((flag, index) => {
            const flagOnDefaultChallenge = defaultChallenge.flags[index];

            return (
              flagOnDefaultChallenge.flag !== flag.flag ||
              flagOnDefaultChallenge.points !== flag.points ||
              flagOnDefaultChallenge.difficulty !== flag.difficulty
            );
          });

          isEditingSomeFlag = someFlagWasEdited;
        }
      }

      buttonShouldBeEnabled =
        (isEditingChallenge || isEditingSomeFlag) &&
        allFieldsAreFilled &&
        oneFlagWasAddedAndAllFilled;
    }

    if (type === "CREATE") {
      buttonShouldBeEnabled = allFieldsAreFilled && oneFlagWasAddedAndAllFilled;
    }

    return buttonShouldBeEnabled;
  };

  const handleAddFlag = () => {
    const initialFlag: CreateOrEditAdminFlag = {
      id: uuid(),
      difficulty: "EASY",
      flag: "",
      points: 0,
    };

    setFlags((oldFlags) => [...oldFlags, initialFlag]);
  };

  const handleChangeFlagInfo = (
    id: string,
    value: string,
    key: "flag" | "points" | "difficulty"
  ) => {
    setFlags((oldFlags) => {
      const newFlags = oldFlags.map((oldFlag) => {
        let shouldSkip = false;
        let formattedValue: string | number | Difficulty = value;

        if (key === "points") {
          formattedValue = Number(value);

          if (Number.isNaN(formattedValue)) {
            shouldSkip = true;
          }
        }

        if (oldFlag.id === id && !shouldSkip) {
          return {
            ...oldFlag,
            [key]: formattedValue,
          };
        }

        return oldFlag;
      });

      return newFlags;
    });
  };

  const handleDeleteFlag = (id: string) => {
    setFlags((oldFlags) => oldFlags.filter((oldFlag) => oldFlag.id !== id));
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
      setUrl(challenge.url);
      setReleaseAt(challenge.releaseAt);
      setFlags(challenge.flags.map((flag) => ({ ...flag, id: uuid() })));

      setDefaultChallenge(challenge);
    }
  };

  useEffect(() => {
    getDefaultChallenge();
  }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex space-x-4">
      <div className="w-1/2">
        <span className="block text-white mb-4">Info</span>

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
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Url"
          />
        </div>

        <div className="flex w-full space-x-4 mb-4">
          {/* Change to Select */}
          <ProfileInput
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
            placeholder="Difficulty"
          />

          {/* Change to Date Picker */}
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
      </div>

      <div className="w-1/2">
        <div className="flex justify-between mb-2">
          <span className="text-white">Flags</span>

          <button
            disabled={flags.length === 3}
            className="flex justify-center items-center w-8 h-8 bg-green-700 rounded-md text-white hover:opacity-80 disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={handleAddFlag}
            type="button"
          >
            <Plus />
          </button>
        </div>

        <ul className="space-y-4">
          {flags.map((flag) => {
            return (
              <li className="flex items-center space-x-3">
                <ProfileInput
                  placeholder="Flag"
                  value={flag.flag}
                  onChange={(e) =>
                    handleChangeFlagInfo(flag.id, e.target.value, "flag")
                  }
                />

                <div className="w-36">
                  <ProfileInput
                    placeholder="Difficulty"
                    value={flag.difficulty}
                    onChange={(e) =>
                      handleChangeFlagInfo(
                        flag.id,
                        e.target.value,
                        "difficulty"
                      )
                    }
                  />
                </div>

                <div className="w-24">
                  <ProfileInput
                    placeholder="CP"
                    value={flag.points ?? 0}
                    onChange={(e) =>
                      handleChangeFlagInfo(flag.id, e.target.value, "points")
                    }
                  />
                </div>

                <button
                  type="button"
                  className="flex justify-center items-center px-1.5 py-2 rounded-md bg-[#FF5733] text-white hover:opacity-80"
                  onClick={() => handleDeleteFlag(flag.id)}
                >
                  <Trash3Fill />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </form>
  );
}
