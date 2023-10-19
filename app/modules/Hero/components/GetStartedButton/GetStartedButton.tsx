import Link from "next/link";

let GetStartedButton = () => {
  return (
    <Link
      className="w-fit hover:border-accent hover:text-text hover:bg-background transition-colors duration-300 border-2 border-text-300 box-border mx-auto text-background bg-text-300  px-5 py-1  rounded-lg block  text-[min(2vw,20px)]"
      href="/"
    >
      <p className=" tracking-tight">Get started</p>
    </Link>
  );
};

export default GetStartedButton;
