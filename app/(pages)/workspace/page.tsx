import { NavigationButton } from "@/app/shared/components/buttons";
import { UserProjects } from "@/app/modules";
import { Suspense } from "react";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Workspace • Cleverize",
  description:
    "This is your workspace. Here you will find all your existing projects. Project is goal, something you want to learn. It can be anything from assembly to python!",
};
function UserRoadmapsLoading() {
  return (
    <div className="w-full mx-auto space-y-10 p-5 h-fit py-20">
      <Skeleton height="40px" width="150px" rounded="6px" />
      <div className="space-y-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="border border-secondary p-4 rounded min-h-[70px] flex items-center justify-center"
          >
            <Skeleton width={"75%"} height={"24px"} rounded={"4px"} />
          </div>
        ))}
      </div>
      <Skeleton height="20px" width="100px" />
    </div>
  );
}

function WorkspacePage() {
  return (
    <div className="flex flex-col h-screen border-accent items-center justify-between mt-20">
      <NavigationButton href={"/"} title={"Home"} />
      <div className="flex flex-col pt-10 w-min items-center min-w-[350px] gap-10 mx-auto h-fit">
        <div className="border-2 bg-secondary p-5 gap-5 border-accent min-w-[350px] w-8/12 sm:w-full rounded-lg flex flex-col items-start">
          <h1 className="text-2xl text-text font-inter font-bold italic text-left">
            Hint
          </h1>
          <p className="text-lg text-text font-normal">
            This is your workspace.
            <br /> Here you will find all your existing projects. Project is
            goal, something you want to learn. It can be anything from assembly
            to python!
          </p>
        </div>

        <Suspense fallback={<UserRoadmapsLoading />}>
          <UserProjects />
        </Suspense>
      </div>
    </div>
  );
}

export default WorkspacePage;
