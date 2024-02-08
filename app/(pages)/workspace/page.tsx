import { NavigationButton } from "@/app/shared/components/buttons";
import { UserProjects } from "@/app/modules";
import { Suspense } from "react";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { redirect } from "next/navigation";

function UserRoadmapsLoading() {
  return (
    <div className="w-full mx-auto space-y-10 p-5 h-fit py-20">
      <Skeleton height="40px" width="150px" />
      <div className="space-y-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="dark:border bg-azure-100 shadow-xl rounded-lg dark:bg-azure-900 dark:border-azure-700 p-5  min-h-[60px] flex items-center justify-center"
          >
            <Skeleton width={"75%"} height={"24px"} />
          </div>
        ))}
      </div>
      <Skeleton height="20px" width="100px" />
    </div>
  );
}

function WorkspacePage({}) {
  return (
    <div className="flex flex-col h-screen  items-center justify-between mt-20">
      <NavigationButton href={"/"} title={"Home"} />
      <div className="flex flex-col pt-10 w-min items-center min-w-[350px] gap-10 mx-auto h-fit">
        <div className="border-2 text-azure-950 dark:text-azure-50 bg-azure-100 dark:bg-azure-900 border-azure-200 dark:border-azure-800  p-5 gap-5 min-w-[350px] w-8/12 sm:w-full rounded-lg flex flex-col items-start">
          <h1 className="text-2xl font-inter font-bold italic text-left">
            Hint
          </h1>
          <p className="text-lg font-normal">
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
