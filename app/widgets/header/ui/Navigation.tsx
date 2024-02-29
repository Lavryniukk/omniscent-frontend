import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="hidden md:flex h-full items-center gap-5">
      <Link
        href={"/workspace"}
        className={`textblack 950 dark:text-foreground hover:opacity-80 transition-opacity duration-100`}
      >
        Workspace
      </Link>
      <Link
        href={"/blog"}
        className={`textblack 950 dark:text-foreground hover:opacity-80 transition-opacity duration-100`}
      >
        Blog
      </Link>
      <button
        onClick={() => {
          const windowHeight = document.body.scrollHeight;
          console.log(windowHeight);
          window.scrollTo({ top: windowHeight, behavior: "smooth" });
        }}
        className={`textblack 950 dark:text-foreground hover:opacity-80 transition-opacity duration-100`}
      >
        Feedback
      </button>
    </nav>
  );
}
