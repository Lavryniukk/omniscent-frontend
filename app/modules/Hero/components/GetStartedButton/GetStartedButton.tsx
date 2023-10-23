import Link from "next/link";

let GetStartedButton = () => {
  return (
    <Link
      className="w-fit hover:border-accent tracking-tight border-[0.2px] hover:text-text border-accent text-md font-light hover:bg-background transition-all duration-300  shadow-sm hover:shadow-primary shadow-primary hover:shadow-lg box-border mx-auto text-text bg-primary  px-5 py-1  rounded-lg block  text-[min(2vw,20px)]"
      href="/"
    >
      Get started
    </Link>
  );
};

export default GetStartedButton;
