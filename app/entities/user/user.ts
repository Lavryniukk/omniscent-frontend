import { LANGUAGE } from "@/app/shared/constants";
import { Subscription } from "..";

type User = {
  email: string;
  id: string;
  name: string;
  password: string;

  roadmaps: string[];
  subscription: Subscription;

  metadata: {
    language: LANGUAGE;
  };

  createdAt: Date;
  updatedAt: Date;
};
export type { User };
