import { ThemeSwitcher } from "@/app/features";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
const NavigationButton = ({
  href,
  title,
}: {
  href: string;
  title: string;
}): React.ReactNode => {
  return (
    <div className="flex items-center absolute left-10 top-10 gap-2">
      <Link
        href={href}
        className="flex items-center gap-1 justify-center p-2  w-fit dark:text-azure-50/80 text-azure-950/80   hover:opacity-80"
      >
        <MoveLeft className="font-light" strokeWidth={1} />
        To {title}
      </Link>
      <ThemeSwitcher />
    </div>
  );
};

export default NavigationButton;
