import axios, { AxiosError, AxiosResponse } from "axios";
import { JwtTokenPair } from "../types";
import { axiosWithoutAuth } from "./axios-without-auth";
import { cookies as cookiesStore } from "./cookies";
axios.defaults.withCredentials = true;

export const axiosWithAuth = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosWithAuth.interceptors.request.use(async (config) => {
  const cookies = await cookiesStore();
  const accessToken: { value: string } | undefined = cookies.get("_at");
  const refreshToken: { value: string } | undefined = cookies.get("_rt");
  const controller = new AbortController();

  if (!accessToken && !refreshToken) {
    controller.abort({ message: "Abort due to missing tokens" });
  } else if (!accessToken && refreshToken) {
    try {
      const { data: tokens }: AxiosResponse<JwtTokenPair> =
        await axiosWithoutAuth.post("/auth/refresh-token", {
          refresh_token: refreshToken?.value,
        });

      cookies.set("_rt", tokens._rt, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: Number(process.env.REFRESH_TOKEN_MAX_AGE),
      });

      cookies.set("_at", tokens._at, {
        httpOnly: false,
        secure: true,
        sameSite: "strict",
        maxAge: Number(process.env.ACCESS_TOKEN_MAX_AGE),
      });

      config.headers.Authorization = `Bearer ${tokens._at}`;
    } catch (error) {
      console.log(
        "Error refreshing token: ",
        (error as AxiosError).response?.data
      );
      controller.abort({ message: "Abort due to error refreshing tokens" });
    }
  } else {
    config.headers.Authorization = `Bearer ${accessToken?.value}`;
  }

  return {
    ...config,
    signal: controller.signal,
  };
});

axiosWithAuth.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    if (error.config?.signal?.aborted) {
      console.log("Request was aborted, request: ", error.config);
    } else {
      console.log(
        "AXIOS INTERCEPTOR CAUGHT AN ERROR: \n",
        error.response?.data
      );
    }

    return Promise.reject(error);
  }
);
