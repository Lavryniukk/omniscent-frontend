import Link from "next/link";

type ButtonType = {
  text: string;
  width?: string;
  height: string;
  href?: string;
  rounded?: string;
  classname?: string;
  observed?: boolean;
  callbackFn?: () => void;
};

export default function PrimaryBtn({
  text,
  observed = false,
  width,
  height,
  href,
  classname,
  rounded,
  callbackFn,
}: ButtonType) {
  return (
    <div
      style={{
        width: `${width}`,
      }}
      className={`${
        observed && "delay-200 observe transition-all duration-500"
      } ${classname}`}
    >
      <Link
        style={{
          borderRadius: `${rounded}`,
          height: `${height}`,
        }}
        onClick={(e) => {
          !href && e.preventDefault();
          callbackFn && callbackFn();
        }}
        // Styling for the button
        className={`border-2 w-full hover:text-text border-text text-md font-medium hover:bg-background transition-all duration-200 flex justify-center items-center box-border mx-auto text-background bg-text rounded-md text-lg`}
        href={`${href ? href : ""}`}
      >
        {text}
      </Link>
    </div>
  );
}
