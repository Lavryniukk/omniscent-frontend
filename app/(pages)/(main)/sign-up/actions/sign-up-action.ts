"use server";
import { fetchSignUp } from "@/app/shared/api/auth";
import validateForm from "../helpers/validate-form";
import AuthFormValidationErrorType from "../types/auth-form-validation-error";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";
import { axiosWithoutAuth } from "@/app/shared/config";

type AuthActionReturnType = {
  toast?: {
    variant?: "destructive";
    title: string;
    description: string;
    action?: any;
  };
} & AuthFormValidationErrorType;

export default async function signUpAction(
  _: AuthFormValidationErrorType,
  data: FormData
): Promise<AuthActionReturnType> {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  Cookies.set("email", email, {
    expires: 365,
  });
  axiosWithoutAuth("/cookie", { withCredentials: true });

  const newErrors = validateForm(email, password);
  console.log(newErrors);
  if (newErrors.email.length !== 0 && newErrors.password.length !== 0) {
    return newErrors;
  }

  const res = await fetchSignUp({ email, password });

  if (res.ok) {
    // redirect("/");
    return {
      toast: {
        title: "Success!",
        description: "You have successfully signed up.",
      },
      email: [],
      password: [],
    };
  } else {
    const status = res?.data?.response?.status;

    if (status === 409) {
      return {
        email: [],
        password: [],
        toast: {
          variant: "destructive",
          title: "Whoops! Looks like this email is already in use.",
          description: "Dementia 🤔? Anyway, try signing in.",
        },
      };
    } else {
      return {
        email: [],
        password: [],
        toast: {
          variant: "destructive",
          title: "Whoops! Looks like something went wrong.",
          description:
            "You should probably tell owners to fire their developers.",
        },
      };
    }
  }
}
