import Link from "next/link";

export default function ProjectsNotFound() {
  return (
    <div className="w-3/4 mx-auto flex flex-col justify-between items-center h-3/4">
      <h2 className="text-accent text-center text-xl mx-auto py-20">
        <i>{"`confused`" + " "}</i>Whoops... Looks like you have no projects{" "}
        {":("}
      </h2>
      <button className="mx-auto border-2 box-border hover:text-text hover:bg-background hover:border-text overflow-hidden transition-all duration-300 block rounded-lg py-3 px-8 text-background bg-text ">
        <Link
          href="/workspace/create"
          className="text-accent z-10 relative text-inherit text-lg"
        >
          Create new!
        </Link>
      </button>
    </div>
  );
}
