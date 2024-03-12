import { fetchSignIn } from "@/app/shared/api/auth";
import validateForm from "../helpers/validate-form";
import AuthFormValidationErrorType from "../types/auth-form-validation-error";
//FIXME this shit must be refactored @lariniv
type AuthActionReturnType = {
  toast?: {
    variant?: "destructive";
    title: string;
    description: string;
    action?: any;
  };
} & AuthFormValidationErrorType;

export default async function signInAction(
  _: AuthFormValidationErrorType,
  data: FormData
): Promise<AuthActionReturnType> {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

  const errors = validateForm(email, password);

  if (errors.email.length !== 0 && errors.password.length !== 0) {
    return errors;
  }
//NOTE 
  const res = await fetchSignIn({ email, password });

  if (res.ok) {
    return {
      email: [],
      password: [],
      toast: {
        title: "Success",
        description:
          "You should probably tell owners to fire their developers.",
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
