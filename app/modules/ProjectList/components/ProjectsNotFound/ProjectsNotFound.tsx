import Link from "next/link";

export default function ProjectsNotFound() {
  return (
    <div className="w-3/4 mx-auto flex flex-col justify-between items-center h-3/4">
      {/* <div className="py-20 space-y-5">
            <AiOutlineQuestion
              className="w-32 h-32 aspect-square rounded-full bg-transparent text-accent-800 mx-auto"
              title="Here could be your icon!"
            /> */}
      <h2 className="text-accent text-center text-xl mx-auto py-20">
        <i>{"`confused`" + " "}</i>Whoops... Looks like you have no projects{" "}
        {":("}
      </h2>
      {/* </div> */}
      <button
        className="mx-auto border-2 box-border hover:text-text hover:bg-background hover:border-text overflow-hidden transition-all duration-300 block rounded-lg py-3 px-8 text-background bg-text "
        // className={`mx-auto hover:text-text overflow-hidden transition-colors duration-200 block rounded-lg py-3 px-8 z-1 before:transition-all bg-secondary relative before:duration-500 text-accent
        //      before:bg-primary hover:before:scale-100 before:absolute before:-left-1/4 before:w-[150%]
        //        before:-top-1/2 before:z-[2] before:scale-0 before:rounded-full before:aspect-square`}
      >
        <Link
          href="/projects/new"
          className="text-accent z-10 relative text-inherit text-lg"
        >
          Create new!
        </Link>
      </button>
    </div>
  );
}
