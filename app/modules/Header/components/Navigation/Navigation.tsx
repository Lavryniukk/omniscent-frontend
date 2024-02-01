import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="hidden md:flex h-full items-center gap-5">
      <Link
        href={"/workspace"}
        className={`text-azure-950 dark:text-azure-50 hover:opacity-80 transition-opacity duration-100`}
      >
        Workspace
      </Link>
      <Link
        href={"/blog"}
        className={`text-azure-950 dark:text-azure-50 hover:opacity-80 transition-opacity duration-100`}
      >
        Blog
      </Link>
    </nav>
  );
}
