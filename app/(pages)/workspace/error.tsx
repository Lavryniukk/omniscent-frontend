"use client";

import { Button } from "@/app/shared/ui";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-azure-200 gap-10 dark:bg-azure-950 flex flex-col items-center justify-center w-screen h-screen ">
      <h2 className="text-azure-950 text-4xl font-bold text-center">
        Whoops, something went wrong! If the error persists, please contact us.
      </h2>
      <Button callback={reset}>Try again</Button>
    </div>
  );
}
