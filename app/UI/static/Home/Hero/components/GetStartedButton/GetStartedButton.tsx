import Link from "next/link";

// Component for rendering the "Get Started" button with a link
let GetStartedButton = () => {
  return (
    <div className="delay-200 observe transition-all duration-500">
      <Link
        // Styling for the button
        className="w-fit hover:border-accent tracking-tight border-[0.5px] hover:text-text border-text text-md font-medium hover:bg-background transition-all duration-200  box-border mx-auto text-background bg-text  px-7 py-2  rounded-md block  text-lg"
        href="/"
      >
        Get started
      </Link>
    </div>
  );
};

export default GetStartedButton;
