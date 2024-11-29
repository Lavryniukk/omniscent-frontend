"use client";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="hidden md:flex h-full items-center gap-5">
      <Link
        href={"/workspace"}
        className={` hover:opacity-80 transition-opacity duration-100`}
      >
        Workspace
      </Link>
      <Link
        href={"/blog"}
        className={`hover:opacity-80 transition-opacity duration-100`}
      >
        Blog
      </Link>
      <Link
        href={"/pricing"}
        className={`hover:opacity-80 transition-opacity duration-100`}
      >
        Pricing
      </Link>
      <button
        onClick={() => {
          const windowHeight = document.body.scrollHeight;
          console.log(windowHeight);
          window.scrollTo({ top: windowHeight, behavior: "smooth" });
        }}
        className={` hover:opacity-80 transition-opacity duration-100`}
      >
        Feedback
      </button>
      <Link
        href={"/support-us"}
        className={`hover:opacity-80 transition-opacity duration-100`}
      >
        Support us
      </Link>
    </nav>
  );
}
