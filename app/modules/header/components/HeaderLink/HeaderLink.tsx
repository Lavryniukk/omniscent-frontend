import Link from "next/link";

type Props = {
  url: string; // Define a prop for the URL to navigate to.
  name: string; // Define a prop for the link name or label.
};

let HeaderLink = ({ url, name }: Props) => {
  return (
    <Link
      href={url} // Set the URL to navigate to based on the prop.
      className="text-text hover:text-accent text-md font-inter font-light transition-colors duration-200"
    >
      {name} {/* Display the link name or label as the link text. */}
    </Link>
  );
};

export default HeaderLink;
