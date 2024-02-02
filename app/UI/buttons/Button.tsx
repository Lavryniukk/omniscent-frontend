"use client";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  disabled?: boolean;
  href?: string;
  type?: "submit" | "button";
  size?: "sm" | "md" | "lg";
  callback?: (e: React.MouseEvent) => void;
};

export default function Button({
  children,
  variant = "primary",
  disabled = false,
  href,
  size = "md",
  callback,
  type = "button",
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
      classKit = `inline-flex ${
        disabled && "disabled"
      } items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-azure-500 bg-azure-500 text-azure-50 dark:text-azure-50 hover:opacity-90 ${sizeKit}`;
      break;
    case "secondary":
      classKit = `inline-flex ${
        disabled && "disabled"
      } items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-azure-100 text-azure-800 dark:bg-azure-900 dark:text-azure-100 hover:opacity-90 ${sizeKit}`;
      break;
    case "outline":
      classKit = `inline-flex ${
        disabled && "disabled"
      } items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-azure-500 text-azure-500 dark:text-azure-300 dark:border-azure-500 dark:hover:bg-azure-500 dark:hover:text-azure-100 bg-azure-50 dark:bg-azure-950 hover:bg-azure-500  hover:text-azure-50 ${
        size == "sm" ? "border" : "border-2"
      } ${sizeKit}`;
      break;
    case "ghost":
      classKit = `inline-flex ${
        disabled && "disabled"
      } items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-azure-100 hover:dark:bg-azure-900 dark:bg-azure-950 text-azure-950 dark:text-azure-50 ${sizeKit}`;
      break;
    case "danger":
      classKit = `inline-flex ${
        disabled && "disabled"
      } items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-700 text-azure-950 dark:text-azure-50 hover:bg-red-700/90 ${sizeKit}`;
      break;
  }

  if (href) {
    return (
      <Link
        onClick={(e) => {
          !href || (disabled && e.preventDefault());

          callback && callback(e);
        }}
        className={classKit}
        href={href}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        onClick={(e) => {
          !href || (disabled && e.preventDefault());
          callback && callback(e);
        }}
        disabled={disabled}
        className={classKit}
      >
        {children}
      </button>
    );
  }
}
