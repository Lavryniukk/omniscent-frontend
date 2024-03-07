"use server";
import { config } from "dotenv";
import axios from "axios";
import { cookies } from "next/headers";
config();

axios.defaults.withCredentials = true;

export const axiosWithAuth = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
  withCredentials: true, // Include cookies in the request (equivalent to credentials: 'include')
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosWithoutAuth = axios.create({
  baseURL: `${process.env.SERVER_URL}/api`,
  withCredentials: true, // Include cookies in the request (equivalent to credentials: 'include')
  headers: {
    "Content-Type": "application/json",
  },
});

axiosWithAuth.interceptors.request.use(async (config) => {
  console.log("Axios with auth interceptor fired");
  const accessToken: { value: string } | undefined = cookies().get("_at");
  const refreshToken: { value: string } | undefined = cookies().get("_rt");

  if (!accessToken && !refreshToken) {
    console.log("Access token and refresh token are missing");
    throw new Error("Access token and refresh token are missing");
  } else if (!accessToken && refreshToken) {
    try {
      console.log("Refreshing token");
      const res = await axiosWithoutAuth.post("/auth/refresh-token", {
        refresh_token: refreshToken.value,
      });

      console.log("Refresh token response:", res.data);

      cookies().set("_at", res.data._at, {
        httpOnly: false,
        secure: true,
        maxAge: Number(process.env.ACCESS_TOKEN_MAX_AGE),
      });
      cookies().set("_rt", res.data._rt, {
        httpOnly: true,
        secure: true,
        maxAge: Number(process.env.REFRESH_TOKEN_MAX_AGE),
      });

      config.headers.Authorization = `Bearer ${res.data._at}`;

      return config;
    } catch (error) {
      console.log("Error with refresh token fetch", error);
    }
  } else {
    console.log("Nothing triggered, this means all tokens are present");
  }

  config.headers.Authorization = `Bearer ${accessToken?.value}`;

  return config;
});

axiosWithAuth.interceptors.response.use(
  (response) => response,

  async (error) => {
    console.log("Error :", error.url);

    // if (error.response.status === 401) {
    //   const res = await axiosWithAuth.post("/auth/refresh-token");

    //   Cookies.set("access_token", res.data.access_token);
    //   return axiosWithAuth.request(error.config);
    // }
    return Promise.reject(error);
  }
);
