"use server";
import axios, { AxiosResponse } from "axios";

type fetchSignUpArgs = {
  email: string;
  password: string;
};

type fetchSignUpReturnType = {
  ok: boolean;
  data: any;
};

export async function fetchSignUp(
  data: fetchSignUpArgs
): Promise<fetchSignUpReturnType> {
  try {
    const res: AxiosResponse<{
      ok: boolean;
    }> = await axios(`${process.env.CLIENT_URL}/api/sign-up`, {
      method: "POST",
      data,
    });

    if (!res.data.ok) {
      return { ok: false, data: res.data };
    }

    return { ok: true, data: res.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: error };
  }
}
