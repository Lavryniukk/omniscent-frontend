import Link from "next/link";
import ButtonProps from "../types/ButtonProps";

export default function PrimaryBtn({
  text,
  observed = false,
  width,
  height,
  href,
  classname,
  rounded,
  callbackFn,
}: ButtonProps) {
  return (
    <Link
      style={{
        width: `${width}`,

        borderRadius: `${rounded}`,
        height: `${height}`,
      }}
      onClick={(e) => {
        !href && e.preventDefault();
        callbackFn && callbackFn();
      }}
      // Styling for the button
      className={`border ${
        observed && "observe"
      } m-2 overflow-visible hover:text-text border-text text-md font-medium hover:bg-background transition-all duration-200 flex justify-center items-center  mx-auto text-background bg-text rounded-md ${classname}`}
      href={`${href ? href : ""} `}
    >
      {text}
    </Link>
  );
}
