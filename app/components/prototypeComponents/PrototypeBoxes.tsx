import Link from "next/link";
let Boxes = () => {
  return (
    <div className="flex flex-row justify-around mt-10 select-none">
      <Link
        href={"/prototype/chat"}
        className="w-4/12 text-text border-2 aspect-square rounded-2xl border-secondary hover:border-accent"
      >
        WIP(link to chat)
      </Link>
      <Link
        href={"/prototype/roadmap"}
        className="w-4/12 text-text border-2 aspect-square rounded-2xl border-secondary hover:border-accent"
      >
        WIP(link to roadmap)
      </Link>
    </div>
  );
};
export default Boxes;
