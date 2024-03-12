"use server";
import axios, { AxiosError, AxiosResponse } from "axios";
import { cookies } from "next/headers";
import { fetchRefreshToken } from "../api/auth/fetch-refresh-token";
import { JwtTokenPair } from "../types";
import { axiosWithoutAuth } from "./axios-without-auth";
axios.defaults.withCredentials = true;

export const axiosWithAuth = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

axiosWithAuth.interceptors.request.use(async (config) => {
  console.log("Axios with auth interceptor fired");

  const accessToken: { value: string } | undefined = cookies().get("_at");
  const refreshToken: { value: string } | undefined = cookies().get("_rt");
  const controller = new AbortController();

  if (!accessToken && !refreshToken) {
    console.log("Access token and refresh token are missing");

    controller.abort({ message: "Abort due to missing tokens" });
  } else if (!accessToken && refreshToken) {
    console.log("Refreshing token");
    try {
      const { data: tokens }: AxiosResponse<JwtTokenPair> =
        await axiosWithoutAuth.post("/auth/refresh-token", {
          refresh_token: refreshToken?.value,
        });

      cookies().set("_rt", tokens._rt, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: Number(process.env.REFRESH_TOKEN_MAX_AGE),
      });

      cookies().set("_at", tokens._at, {
        httpOnly: false,
        secure: true,
        sameSite: "strict",
        maxAge: Number(process.env.ACCESS_TOKEN_MAX_AGE),
      });

      console.log("Refresh token response: ", tokens);
      config.headers.Authorization = `Bearer ${tokens._at}`;
    } catch (error) {
      console.log(
        "Error refreshing token: ",
        (error as AxiosError).response?.data
      );
      controller.abort({ message: "Abort due to error refreshing tokens" });
    }
  } else {
    console.log("Nothing triggered, this means all tokens are present");
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
      console.log("AXIOS INTERCEPTOR CAUGHT AN ERROR: \n", error);
    }

    return Promise.reject(error);
  }
);
