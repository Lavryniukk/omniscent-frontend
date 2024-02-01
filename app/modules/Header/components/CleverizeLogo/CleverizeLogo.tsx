import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/images/cleverize-dark.webp";
      break;
    case "dark":
      src = "/images/cleverize.webp";
      break;
    default:
      src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }
  return (
    <Link href="/" className="flex mx-auto items-center h-full ">
      <Image src={src} alt="Cleverize logo" width={32} height={32} />
    </Link>
  );
};

export default Logo;
