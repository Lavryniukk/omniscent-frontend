import Link from "next/link";
import ButtonProps from "../types/ButtonProps";

export default function PrimaryBtn({
  text,
  observed = false,
  width,
  height,
  href,
  classname,
  rounded = "4px",
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
      } m-2 overflow-visible active:shadow-none border-text text-md font-medium transition-all duration-100 flex justify-center text-background items-center mx-auto bg-text hover:text-text hover:bg-background rounded ${classname}`}
      href={`${href ?? ""} `}
    >
      {text}
    </Link>
  );
}
