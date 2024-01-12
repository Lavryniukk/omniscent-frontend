import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
let Logo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/" className="flex mx-auto items-center h-full ">
      <Image
        src={`/images/logo-cleverize-${
          !theme ? "dark" : theme == "light" ? "dark" : "light"
        }.webp`}
        // src={`/images/logo-cleverize-light.webp`}
        className={`sm:mx-auto border-text ml-0 `}
        alt=""
        width={32}
        height={32}
      />
    </Link>
  );
};

let BannerLogo = () => {
  const { theme } = useTheme();

  return (
    <div className="md:hidden flex justify-between items-center w-full">
      <Link href="/" className="flex items-center h-full">
        <Image
          src={`/images/logo-cleverize-${
            !theme ? "dark" : theme == "light" ? "dark" : "light"
          }.webp`}
          className={`border-text ml-0 `}
          alt=""
          width={40}
          height={40}
        />
      </Link>
    </div>
  );
};
export { BannerLogo };
export default Logo;
