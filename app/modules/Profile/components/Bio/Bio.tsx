import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { useState } from "react";

export default function Bio() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return !isLoading ? (
    <form className="rounded-lg shadow-lg w-full sm:max-w-xl">
      <div className="">
        <label
          htmlFor="bio"
          className="block text-xl sm:text-lg text-text mb-2"
        >
          Bio
        </label>
        <textarea
          id="bio"
          rows={3}
          className="w-full p-2 rounded min-h-[50px] border border-secondary text-lg sm:text-base h-fit max-h-[150px] bg-background text-text"
          placeholder="Tell us your story"
        ></textarea>
      </div>
    </form>
  ) : (
    <div className="flex flex-col gap-2">
      <Skeleton width="200px" height="20px" rounded="4px" noMargin />
      <Skeleton width="100%" height="100px" rounded="8px" noMargin />
    </div>
  );
}
