import { fetchSignUp } from "@/app/shared/api/auth";
import validateForm from "../helpers/validate-form";
import AuthFormValidationErrorType from "../types/auth-form-validation-error";

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

  const errors = validateForm(email, password);
  if (errors.email.length !== 0 || errors.password.length !== 0) {
    return errors;
  }

  const res = await fetchSignUp({ email, password });

  const status = res.data.statusCode;

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
