"use server";
import axios, { AxiosResponse } from "axios";

type FetchSignInArgs = {
  email: string;
  password: string;
};

type FetchSignInReturnType = {
  ok: boolean;
  data: any;
};
//TODO this function has to return only res.data and not res.data.ok. No other logic allowed inside this function. All error handling has to be in other files.
export async function fetchSignIn(
  data: FetchSignInArgs
): Promise<FetchSignInReturnType> {
  try {
    const res: AxiosResponse<{
      ok: boolean;
    }> = await axios(`${process.env.CLIENT_URL}/api/sign-in`, {
      method: "POST",
      data,
      withCredentials: true,
    });
    console.log(res);
    if (!res.data.ok) {
      return { ok: false, data: res.data };
    }

    return { ok: true, data: res.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: error };
  }
}
