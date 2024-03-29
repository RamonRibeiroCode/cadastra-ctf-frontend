import { User } from "@/typings/user";
import { FormEvent, useEffect, useState } from "react";
import ProfileInput from "./ui/Input";
import api from "@/services/api";
import { CreatedOrEditUser } from "@/app/(pages)/admin/users/page";
import { UserRole } from "@/contexts/AuthContext";
import Upload from "./ui/Upload";

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
  const [role, setRole] = useState<UserRole>("USER");

  const [imagePreview, setImagePreview] = useState<null | string>(null);
  const [imageFile, setImageFile] = useState<null | File>(null);

  const [defaultUser, setDefaultUser] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({ name, email, password, points, role, avatar: imageFile });
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
      setRole(user.role);

      setDefaultUser(user);
    }
  };

  const getIfButtonShouldBeEnabled = () => {
    let buttonShouldBeEnabled = false;

    if (type === "EDIT") {
      const isEditingUser =
        defaultUser &&
        (name !== defaultUser.name ||
          email !== defaultUser.email ||
          points !== defaultUser.points ||
          role !== defaultUser.role);

      buttonShouldBeEnabled = Boolean(isEditingUser || imagePreview);
    }

    if (type === "CREATE") {
      const allFieldsAreFilled = Boolean(name && email && role);

      buttonShouldBeEnabled = allFieldsAreFilled;
    }

    return buttonShouldBeEnabled;
  };

  const handleImage = (files: FileList) => {
    const file = files.item(0);

    setImagePreview(URL.createObjectURL(file));
    setImageFile(file);
  };

  useEffect(() => {
    getEditUser();
  }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="max-w-3xl">
      <Upload
        handleImage={handleImage}
        imagePreview={imagePreview}
        imageUrl={defaultUser?.avatarUrl}
      />

      <div className="my-4">
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

      <div className="mb-4">
        <ProfileInput
          value={role}
          onChange={(e) => setRole(e.target.value as UserRole)}
          placeholder="Role"
        />
      </div>

      <button
        type="submit"
        disabled={!getIfButtonShouldBeEnabled()}
        className="flex justify-center items-center w-[168px] h-[42px] rounded-md transition-all bg-[#3699ff] hover:bg-[#187de4] disabled:bg-neutral-gray disabled:cursor-not-allowed text-sm font-medium text-white"
      >
        {type === "CREATE" && "Criar Usuario"}
        {type === "EDIT" && "Salvar Alterações"}
      </button>
    </form>
  );
}
