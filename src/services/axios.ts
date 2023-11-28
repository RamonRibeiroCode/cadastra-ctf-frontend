import axios from "axios";
import { destroyCookie, parseCookies } from "nookies";

export const getAPIClient = (ctx?: any) => {
  const { "m3ctf.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env["NEXT_PUBLIC_API_URL"],
  });

  const isClientSide = !ctx;

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        destroyCookie(ctx, "m3ctf.token");
        destroyCookie(ctx, "m3ctf.user");

        if (isClientSide && window.location.pathname !== "/login") {
          window.location.replace("/login");
        }
      }

      return Promise.reject(error);
    }
  );

  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  }

  return api;
};
