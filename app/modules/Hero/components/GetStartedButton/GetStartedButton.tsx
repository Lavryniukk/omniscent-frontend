import Link from "next/link";

// Component for rendering the "Get Started" button with a link
let GetStartedButton = () => {
  return (
    <Link
      // Styling for the button
      className="w-fit hover:border-accent tracking-tight border-[0.2px] hover:text-text border-accent text-md font-medium hover:bg-background transition-all duration-300  box-border mx-auto text-background bg-text  px-5 py-1  rounded-lg block  text-[min(2vw,20px)]"
      href="/"
    >
      Get started
    </Link>
  );
};

export default GetStartedButton;
