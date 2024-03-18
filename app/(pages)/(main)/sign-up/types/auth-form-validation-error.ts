//TODO properties must be renamed, to be more descriptive.
type AuthFormValidationErrorType = {
  email: string[];
  password: string[];
};

type AuthActionToastType = {
  toast?: {
    variant?: "destructive";
    title: string;
    description: string;
    action?: any;
  };
};

type AuthActionReturnType = AuthFormValidationErrorType | AuthActionToastType;

export type {
  AuthFormValidationErrorType,
  AuthActionToastType,
  AuthActionReturnType,
};
