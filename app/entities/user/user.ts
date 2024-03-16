import { LANGUAGE } from "@/app/shared/constants";
import { Subscription } from "..";

type Metadata = {
  language: LANGUAGE;
};

type User = {
  email: string;
  _id: string;
  name: string;
  password: string;
  roadmaps: string[];
  subscription: Subscription;
  metadata: Metadata;
  created_at: Date;
  updated_at: Date;
  last_signed_in: Date
};

export type { User };

