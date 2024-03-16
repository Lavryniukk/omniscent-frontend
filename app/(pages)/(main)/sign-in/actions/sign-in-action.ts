"use server";
import validateForm from "../helpers/validate-form";
import { AuthActionReturnType } from "../../sign-up/types/auth-form-validation-error";
import axios, { AxiosResponse } from "axios";
import { JwtTokenPair } from "@/app/shared/types";
import { axiosWithoutAuth } from "@/app/shared/config";
import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function signInAction(
  _: AuthActionReturnType,
  data: FormData
): Promise<AuthActionReturnType> {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  const errors = validateForm(email, password);

  if (errors.email.length !== 0 && errors.password.length !== 0) {
    return errors;
  }

  try {
    const { data: tokens }: AxiosResponse<JwtTokenPair> =
      await axiosWithoutAuth.post("/auth/sign-in", { email, password });

    const refreshTokenMaxAge = Number(process.env.REFRESH_TOKEN_MAX_AGE);
    const accessTokenMaxAge = Number(process.env.ACCESS_TOKEN_MAX_AGE);

    cookies().set("_rt", tokens._rt, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: refreshTokenMaxAge,
    });

    cookies().set("_at", tokens._at, {
      httpOnly: false,
      secure: true,
      sameSite: "strict",
      maxAge: accessTokenMaxAge,
    });
  } catch (error) {
    return handleAxiosError(error);
  }

 
  redirect("/", RedirectType.replace);
}

const handleAxiosError = (error: any): AuthActionReturnType => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    switch (status) {
      case 409:
        return {
          toast: {
            variant: "destructive",
            title: "Whoops! Looks like we don't know you. 🤔",
            description: "Try signing up.",
          },
        };
      default:
        return {
          toast: {
            variant: "destructive",
            title: "Error",
            description:
              "An unexpected error occurred. Please try again later.",
          },
        };
    }
  } else {
    // Non-Axios error
    return {
      toast: {
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
      },
    };
  }
};
