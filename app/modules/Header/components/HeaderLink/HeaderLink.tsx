import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useCallback, useEffect, useMemo, useState } from "react";

type Props = {
  url: string; // Define a prop for the URL to navigate to.
  name: string; // Define a prop for the link name or label.
};

let HeaderLink = ({ url, name }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    if (path.substring(1) === name.toLowerCase()) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [path, name]);

  return (
    <a
      href={url} // Set the URL to navigate to based on the prop.
      className={`md:text-accent text-text font-inter text-lg md:text-base tracking-wide relative 
      font-light hover:text-accent-300 transition duration-200 before:absolute before:-bottom-0.5 hover:before:w-[96%] 
      before:h-[0.5px] before:bg-accent before:z-10 hover:before:bg-accent-300 before:transition-all 
      before:duration-200 hover:before:opacity-100 before:w-[${
        isActive ? "96" : "0"
      }%]`}
    >
      {name} {/* Display the link name or label as the link text. */}
    </a>
  );
};

export default memo(HeaderLink);
