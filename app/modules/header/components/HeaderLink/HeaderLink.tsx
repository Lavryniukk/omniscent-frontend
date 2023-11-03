import Link from "next/link";

type Props = {
  url: string; // Define a prop for the URL to navigate to.
  name: string; // Define a prop for the link name or label.
};

let HeaderLink = ({ url, name }: Props) => {
  return (
    <a
      href={url} // Set the URL to navigate to based on the prop.
      className="text-text hover:text-accent text-md font-inter font-normal sm:font-light transition-colors duration-200 text-2xl sm:text-lg"
    >
      {name} {/* Display the link name or label as the link text. */}
    </a>
  );
};

export default HeaderLink;
