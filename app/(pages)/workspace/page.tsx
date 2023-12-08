"use client";

import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { NavigationButton } from "@/app/shared/components/buttons";
import { UserProjects } from "@/app/modules";
function WorkspacePage() {
  return (
    <div className="flex flex-col h-screen border-accent items-center justify-center pt-28 sm:pt-0">
      <NavigationButton href={"/"} title={"Home"} />
      <div className="flex flex-col py-10 w-min items-center min-w-[350px] gap-10 mx-auto">
        <div className="border-2 bg-secondary p-5 gap-5 border-accent min-w-[350px] w-8/12 sm:w-full rounded-lg flex flex-col items-start">
          <h1 className="text-2xl text-text font-inter font-bold italic text-left">
            Hint
          </h1>
          <p className="text-lg text-text font-normal">
            This is your workspace.
            <br /> Here you will find all your existing projects. Project is a
            goal, something you want to learn. It can be anything from simple
            framework (like Vue.js) to complex fields (like data science).
          </p>
        </div>
        <UserProjects /> {/* Render the UserProjects component. */}
      </div>
    </div>
  );
}

export default withPageAuthRequired(WorkspacePage);
