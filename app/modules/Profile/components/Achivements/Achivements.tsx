import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { useState } from "react";

export default function Achivements() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return !isLoading ? (
    <div className="rounded-lg">
      <h2 className="text-text text-xl sm:text-lg mb-2">Achievments</h2>
      <div className="h-20 bg-background border border-secondary rounded w-full flex "></div>
    </div>
  ) : (
    <div className="flex flex-col gap-2">
      <Skeleton width="200px" height="20px" rounded="4px" noMargin />
      <Skeleton width="100%" height="100px" rounded="8px" noMargin />
    </div>
  );
}
