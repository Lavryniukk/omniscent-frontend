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

  try {
    // const accessToken = Cookies.get("access_token");
    // config.headers.Authorization = `Bearer ${accessToken}`;
  } catch (error) {
    console.error("Could not get token:", error);
  }

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
