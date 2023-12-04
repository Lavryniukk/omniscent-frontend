import Link from "next/link";
import ButtonProps from "../types/ButtonProps";

export default function PrimaryBtn({
  text,
  observed = false,
  width,
  height,
  href,
  classname,
  rounded = "8px",
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
      } m-2 overflow-visible hover:-translate-y-2 active:shadow-none  hover:shadow-[0px_8px_0px_-2px_rgba(var(--text),0.8)] active:-translate-y-0 border-primary text-md font-medium  transition-all duration-100 flex justify-center items-center  mx-auto text-text bg-primary rounded-md ${classname}`}
      href={`${href ?? ""} `}
    >
      {text}
    </Link>
  );
}
