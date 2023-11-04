"use client";

import UserProjects from "@/app/modules/ProjectList/ProjectList";

function PrototypePage() {
  return (
    <div className="flex h-screen border-accent items-center">
      <UserProjects /> {/* Render the UserProjects component. */}
    </div>
  );
}

export default PrototypePage;
//withPageAuthRequired(
