import { AxiosError } from "axios";

interface AppError {
  message: string;
  code?: number;
}

export const handleError = (err: unknown): AppError => {
  if (err instanceof AxiosError && err.response?.data.message) {
    console.log(err.response.data.message);

    return {
      message: err.response.data.message,
      code: err.response.status,
    };
  }

  return {
    message: "Erro inesperado, tente novamente",
    code: 500,
  };
};
