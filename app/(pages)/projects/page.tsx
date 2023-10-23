"use client";
import ProjectList from "@/app/modules/ProjectList/ProjectList";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

import { useQuery } from "@tanstack/react-query";

function PrototypePage() {
  return (
    <div className="flex h-screen border-accent items-center">
      <ProjectList />
    </div>
  );
}
export default withPageAuthRequired(PrototypePage);
