type Props = {
  url: string; // Define a prop for the URL to navigate to.
  name: string; // Define a prop for the link name or label.
};

let HeaderLink = ({ url, name }: Props) => {
  return (
    <a
      href={url} // Set the URL to navigate to based on the prop.
      className="md:text-accent text-text font-inter text-lg md:text-sm tracking-wide font-light active:text-text"
    >
      {name} {/* Display the link name or label as the link text. */}
    </a>
  );
};

export default HeaderLink;
