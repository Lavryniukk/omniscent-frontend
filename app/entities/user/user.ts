import { LANGUAGE } from "@/app/shared/constants";
import { Subscription } from "..";

type Metadata = {
  language: LANGUAGE;
};

type User = {
  email: string;
  id: string;
  name: string;
  password: string;
  roadmaps: string[];
  subscription: Subscription;
  metadata: Metadata;
  createdAt: Date;
  updatedAt: Date;
};

export type { User };
