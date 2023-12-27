"use server";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  disabled?: boolean;
  href?: string;
  size?: "sm" | "md" | "lg";
  callback?: () => void;
};

export default async function Button({
  children,
  variant = "primary",
  disabled = false,
  href,
  size = "md",
  callback,
}: ButtonProps) {
  let classKit: string = "";
  let sizeKit: string = "";
  switch (size) {
    case "sm":
      sizeKit = "h-10 px-4 py-2 text-sm";
      break;
    case "md":
      sizeKit = "h-12 px-[18px] py-2 text-base";
      break;
    case "lg":
      sizeKit = "h-14 px-5 py-2 text-lg";
      break;
  }
  switch (variant) {
    case "primary":
      classKit = `inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-text text-background hover:bg-text/90 ${sizeKit}`;
      break;
    case "secondary":
      classKit = `inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-accent hover:bg-secondary/80 ${sizeKit}`;
      break;
    case "outline":
      classKit = `inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-text bg-background hover:bg-text hover:text-background ${
        size == "sm" ? "border" : "border-2"
      } ${sizeKit}`;
      break;
    case "ghost":
      classKit = `inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary text-text ${sizeKit}`;
      break;
    case "danger":
      classKit = `inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-700 text-text hover:bg-red-700/90 ${sizeKit}`;
      break;
  }

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    callback?.();
  };

  if (href) {
    return (
      <Link href={href} passHref>
        <a onClick={handleClick} className={classKit}>
          {children}
        </a>
      </Link>
    );
  } else {
    return (
      <button onClick={handleClick} disabled={disabled} className={classKit}>
        {children}
      </button>
    );
  }
}
