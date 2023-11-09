"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Roadmap from "../../types/Roadmap";
import Link from "next/link";

export default function ProjectContainer({ roadmap }: { roadmap: Roadmap }) {
  const { title, _id, owner_id, node_list } = roadmap;
  const { user, isLoading } = useUser();
  let url: string = "";
  if (!isLoading && user) {
    if (user.sub === owner_id) {
      url = `/roadmap/${_id}`;
    }
  } else {
    url = "/roadmap/restricted";
  }
  return (
    <Link
      href={url}
      className="py-5 border block border-secondary rounded-lg text-lg text-center text-accent px-3"
    >
      {title}
    </Link>
  );
}
