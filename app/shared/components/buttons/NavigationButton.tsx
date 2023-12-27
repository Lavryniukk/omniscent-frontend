import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavigationButton = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 justify-center p-2  w-fit text-accent absolute left-10 top-10 hover:opacity-80"
    >
      <MoveLeft className="text-accent font-light" strokeWidth={1} />
      To {title}
    </Link>
  );
};

export default NavigationButton;
