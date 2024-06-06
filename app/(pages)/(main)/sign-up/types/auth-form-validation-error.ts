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
