import Link from "next/link";
type Props = {
  url: string;
  name: string;
};
let HeaderLink = ({ url, name }: Props) => {
  return (
    <a
      href={url}
      className="text-text hover:text-accent text-md font-inter font-light transition-colors duration-200 "
    >
      {name}
    </a>
  );
};
export default HeaderLink;
