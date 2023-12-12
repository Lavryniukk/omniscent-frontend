import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import Link from "next/link";

export default function UserRoadmapsLoading() {
  return (
    <>
      <div className="w-3/4 mx-auto space-y-5 p-5 h-fit py-20">
        <div className="border border-secondary p-4 rounded min-h-[70px] flex items-center justify-center">
          <Skeleton width={"75%"} height={"24px"} rounded={"4px"} />
        </div>
        <div className="border border-secondary p-4 rounded min-h-[70px] flex items-center justify-center">
          <Skeleton width={"75%"} height={"24px"} rounded={"4px"} />
        </div>
      </div>
      {/* <p className="mx-auto text-center underline-offset-2 select-none underline text-accent-600">
        <Link
          href="/workspace/create"
          className="hover:text-accent transition-colors duration-200"
        >
          Create new project
        </Link>
      </p> */}
    </>
  );
}
