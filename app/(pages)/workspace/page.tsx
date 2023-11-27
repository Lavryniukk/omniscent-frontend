"use client";

import UserProjects from "@/app/modules/ProjectList/ProjectList";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";

function WorkspacePage() {
  return (
    <div className="flex h-screen border-accent items-center">
      <a
        href="/"
        className="flex items-center justify-center p-2  w-fit text-accent fixed left-10 top-10 hover:opacity-80"
      >
        <MdOutlineArrowBack />
        To home
      </a>
      <UserProjects /> {/* Render the UserProjects component. */}
    </div>
  );
}

export default withPageAuthRequired(WorkspacePage);
//withPageAuthRequired(
