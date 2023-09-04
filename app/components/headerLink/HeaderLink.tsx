import Link from "next/link";
type Props = {
  url: string;
  name: string;
};
let HeaderLink = ({ url, name }: Props) => {
  return (
    <Link
      href={url}
      className="text-text hover:text-accent text-md font-roboto font-light transition-colors duration-200 "
    >
      {name}
    </Link>
  );
};
export default HeaderLink;
