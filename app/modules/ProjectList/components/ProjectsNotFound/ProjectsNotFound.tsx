import Link from "next/link";

export default function ProjectsNotFound() {
  return (
    <div className="w-3/4 mt-10 mx-auto flex flex-col justify-between items-center h-3/4">
      <button className="mx-auto border-2 w-full  box-border hover:text-text hover:bg-background hover:border-text overflow-hidden transition-all duration-300 block rounded-lg py-5 px-10 text-background bg-text ">
        <Link
          href="/workspace/create"
          className="text-accent z-10 relative text-inherit text-xl"
        >
          Create
        </Link>
      </button>
    </div>
  );
}
