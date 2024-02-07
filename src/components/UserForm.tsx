import { User } from "@/typings/user";
import { FormEvent, useEffect, useState } from "react";
import ProfileInput from "./ui/ProfileInput";
import api from "@/services/api";
import { CreatedOrEditUser } from "@/app/(pages)/admin/users/page";

interface UserFormProps {
  type: "EDIT" | "CREATE";
  userId?: number;
  onSubmit: (user: CreatedOrEditUser) => void;
}

export default function UserForm({
  type,
  userId,
  onSubmit,
}: Readonly<UserFormProps>) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [points, setPoints] = useState<number>(0);
  const [defaultUser, setDefaultUser] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({ name, email, password, points });
  };

  const getEditUser = async () => {
    if (type !== "EDIT" || !userId) {
      return;
    }

    const response = await api.get<User>(`/admin/users/${userId}`);

    const user = response.data;

    if (response) {
      setName(user.name);
      setEmail(user.email);
      setPoints(user.points);

      setDefaultUser(user);
    }
  };

  const getIFButtonShouldBeEnabled = () => {
    let buttonShouldBeEnabled = false;

    if (type === "EDIT") {
      const isEditingUser =
        defaultUser &&
        (name !== defaultUser.name ||
          email !== defaultUser.email ||
          points !== defaultUser.points);

      buttonShouldBeEnabled = isEditingUser;
    }

    if (type === "CREATE") {
      const allFieldsAreFilled = Boolean(name && email);

      buttonShouldBeEnabled = allFieldsAreFilled;
    }

    return buttonShouldBeEnabled;
  };

  useEffect(() => {
    getEditUser();
  }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="max-w-3xl">
      <div className="mb-4">
        <ProfileInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First name"
        />
      </div>

      <div className="mb-4">
        <ProfileInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
      </div>

      {type === "CREATE" && (
        <div className="mb-4">
          <ProfileInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
      )}

      <div className="mb-4">
        <ProfileInput
          value={points}
          onChange={(e) => {
            const value = Number(e.target.value);

            if (Number.isNaN(value)) {
              return;
            }

            setPoints(value);
          }}
          placeholder="Points"
        />
      </div>

      <button
        type="submit"
        disabled={!getIFButtonShouldBeEnabled()}
        className="flex justify-center items-center w-[168px] h-[42px] rounded-md transition-all bg-[#3699ff] hover:bg-[#187de4] disabled:bg-neutral-gray disabled:cursor-not-allowed text-sm font-medium text-white"
      >
        {type === "CREATE" && "Criar Usuario"}
        {type === "EDIT" && "Salvar Alterações"}
      </button>
    </form>
  );
}
