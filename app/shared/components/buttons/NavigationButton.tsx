import { ThemeSwitcher } from "@/app/features";
import CreditsCounter from "@/app/features/credits-counter/CreditsCounter";
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
    <div className="fixed left-5 top-5 gap-4 flex items-center">
      <Link
        href={href}
        className="flex items-center  gap-2 justify-center p-2  w-fit   hover:opacity-80"
      >
        <MoveLeft className="font-light" strokeWidth={1} />
        <p>To {title}</p>
      </Link>
      <ThemeSwitcher />
      <CreditsCounter />
    </div>
  );
};

export default NavigationButton;
