"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

let HomeButton = () => {
  let path = usePathname();

  const links = path.split("/").filter((item) => item.length);

  let currentPath: string = `/`;

  const getLink = (link: string) => {
    currentPath += link + "/";
    return currentPath;
  };

  return (
    <nav className="absolute top-2 left-2 w-fit p-2 rounded bg-secondary">
      <ul>
        {links.map((item, index, array) => (
          <li
            key={index}
            className={`text-accent inline-block ${
              index === array.length - 1 && "cursor-default pointer-events-none"
            }`}
          >
            <Link href={`${getLink(item)}`}>{item}/</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default HomeButton;
