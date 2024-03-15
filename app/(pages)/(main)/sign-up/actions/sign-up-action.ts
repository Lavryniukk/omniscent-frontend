"use server";
import axios, { AxiosResponse } from "axios";
import { cookies } from "next/headers";
import { axiosWithoutAuth } from "@/app/shared/config";
import { JwtTokenPair } from "@/app/shared/types";
import validateForm from "../helpers/validate-form";
import { AuthActionReturnType } from "../types/auth-form-validation-error";
import { RedirectType, redirect } from "next/navigation";

export default async function signUpAction(
  _: AuthActionReturnType,
  formData: FormData
): Promise<AuthActionReturnType> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const errors = validateForm(email, password);
  if (errors.email.length !== 0 || errors.password.length !== 0) {
    return errors;
  }

  try {
    const { data: tokens }: AxiosResponse<JwtTokenPair> =
      await axiosWithoutAuth.post("/auth/sign-up", { email, password });

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
    console.log("error: ", error);
    return handleAxiosError(error);
  }
  //INFO: I moved redirect, so it happens after try-catch block and works as expected
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
            title: "Whoops! Looks like this email is already in use.",
            description: "Dementia 🤔? Anyway, try signing in.",
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
