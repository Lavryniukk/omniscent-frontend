"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import signInAction from "../actions/sign-in-action";
//TODO - we gotta mix this with Sign up https://ui.shadcn.com/docs/components/tabs
export default function SignInForm() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const { toast } = useToast();

  const [state, action] = useFormState(signInAction, {
    email: [],
    password: [],
  });

  useEffect(() => {
    if ("toast" in state && state.toast) {
      toast(state.toast);
    }
  }, [state, toast]);

  return (
    <div className="w-[clamp(350px,20vw,500px)] mt-60 h-full bg-background/50 z-50 p-6 rounded-lg backdrop-blur-sm flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Sign in your account</h1>
      <form action={action} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            className="invalid:ring-red-500"
            type="text"
            id="email"
            name="email"
            placeholder="luke.skywalker@gmail.com"
          />
          <ul>
            {"email" in state &&
              state.email.map((error, index) => (
                <li
                  key={index}
                  className="before:w-1 before:h-1 before:rounded-full before:bg-red-500 before:mr-2 flex items-center"
                >
                  <p className="text-red-500 text-sm font-normal">{error}</p>
                </li>
              ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <div className="w-full h-full relative">
            <Input
              className="invalid:ring-red-500"
              type={isPasswordShown ? "text" : "password"}
              id="password"
              name="password"
              placeholder="SeCuRePaSsWoRd123!"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
              onClick={() => setIsPasswordShown(!isPasswordShown)}
            >
              {isPasswordShown ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>
          <ul>
            {"password" in state &&
              state.password.map((error, index) => (
                <li
                  key={index}
                  className="before:w-1 before:h-1 before:rounded-full before:bg-red-500 before:mr-2 flex items-center"
                >
                  <p className="text-red-500 text-sm font-normal">{error}</p>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending && (
        <Button type="submit" disabled>
          Loading...
        </Button>
      )}
      {!pending && <Button type="submit">Sign in</Button>}
    </>
  );
};
