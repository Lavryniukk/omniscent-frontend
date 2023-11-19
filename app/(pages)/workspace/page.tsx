"use client";

import UserProjects from "@/app/modules/ProjectList/ProjectList";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

function WorkspacePage() {
  return (
    <div className="flex h-screen border-accent items-center">
      <UserProjects /> {/* Render the UserProjects component. */}
    </div>
  );
}

export default withPageAuthRequired(WorkspacePage);
//withPageAuthRequired(
