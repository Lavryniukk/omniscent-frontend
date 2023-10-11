"use client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import ProjectList from "@/app/modules/ProjectList/ProjectList";

function PrototypePage() {
  return (
    <div className="flex h-screen border-accent items-center">
      <div className="mx-auto w-1/4 min-w-[300px] p-2 rounded-xl space-y-3 bg-secondary border-2 border-accent ">
        <ProjectList />
      </div>
    </div>
  );
}
export default withPageAuthRequired(PrototypePage);
