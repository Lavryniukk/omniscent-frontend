"use server";
import axios, { AxiosResponse } from "axios";
import { JwtTokenPair } from "@/app/shared/types";

export type RefreshTokenArgs = {
  refresh_token: string;
};

export async function fetchRefreshToken(
  data: RefreshTokenArgs
): Promise<AxiosResponse<JwtTokenPair>> {
  return axios(`${process.env.CLIENT_URL}/api/refresh-token`, {
    method: "POST",
    data,
    withCredentials: true,
  });
}
