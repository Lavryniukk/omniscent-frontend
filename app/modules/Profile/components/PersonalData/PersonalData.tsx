/* eslint-disable @next/next/no-img-element */
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function PersonalData() {
  const { user, isLoading } = useUser();
  const pic = user?.picture ?? ""; // Fallback to an empty string if picture is not available.
  return !isLoading ? (
    <div className="flex flex-col items-start rounded-lg shadow-lg">
      <img
        src={pic}
        alt="User profile"
        className="rounded-full border-2 border-secondary w-40 h-40"
      />
      <h2 className="mt-4 text-4xl sm:text-3xl font-bold text-text">
        {user?.name}
      </h2>
      <p className="text-base sm:text-sm text-accent">@{user?.nickname}</p>
    </div>
  ) : (
    <div className="flex flex-col gap-4 justify-start">
      <Skeleton width="200px" height="200px" rounded="100%" noMargin />
      <Skeleton width="200px" height="20px" rounded="4px" noMargin />
      <Skeleton width="150px" height="20px" rounded="4px" noMargin />
    </div>
  );
}
