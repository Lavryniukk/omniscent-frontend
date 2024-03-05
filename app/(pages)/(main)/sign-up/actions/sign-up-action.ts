"use server";
import { fetchSignUp } from "@/app/shared/api/auth";
import validateForm from "../helpers/validate-form";
import AuthFormValidationErrorType from "../types/auth-form-validation-error";
import { redirect } from "next/navigation";

type ToastType = {
  toast?: {
    variant?: "destructive";
    title: string;
    description: string;
    action?: any;
  };
};

export default async function signUpAction(
  _: AuthFormValidationErrorType,
  data: FormData
): Promise<AuthFormValidationErrorType & ToastType> {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  const newErrors = validateForm(email, password);

  if (newErrors.email.length !== 0 && newErrors.password.length !== 0) {
    return newErrors;
  }

  const res = await fetchSignUp({ email, password });

  if (res.ok) {
    redirect("/");
  } else {
    const status = res.data.response.status;

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
