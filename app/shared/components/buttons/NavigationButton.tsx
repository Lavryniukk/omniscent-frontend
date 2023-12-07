import Link from "next/link";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";

const NavigationButton = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-center p-2  w-fit text-accent fixed left-10 top-10 hover:opacity-80"
    >
      <MdOutlineArrowBack />
      To {title}
    </Link>
  );
};

export default NavigationButton;
