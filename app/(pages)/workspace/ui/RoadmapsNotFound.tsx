import { Button } from "@/components/ui/button";
import { ButtonWithMovingBorder } from "@/components/ui/moving-border";
import Link from "next/link";

export default function RoadmapsNotFound() {
  return (
    <div className="flex  items-center justify-center w-full p-4 rounded-md">
      <Link href="workspace/new">
        <ButtonWithMovingBorder
          borderRadius="0.75rem"
          borderClassName=" bg-red-700 dark:bg-red-300 "
          className="border-2 text-lg bg-primary text-primary-foreground w-full whitespace-nowrap p-2"
        >
          Create roadmap
        </ButtonWithMovingBorder>
      </Link>
    </div>
  );
}
