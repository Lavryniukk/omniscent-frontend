import Image from "next/image";
// let Logo = ({ picTheme }: { picTheme: string }) => {
const Logo = () => {
  return (
    <a href="/" className="flex mx-auto items-center  h-full ">
      <Image
        // src={`/images/logo-cleverize-${
        //   !picTheme ? "dark" : picTheme == "light" ? "dark" : "light"
        // }.webp`}
        src={`/images/logo-cleverize-light.webp`}
        className={`sm:mx-auto border-text ml-0 `}
        alt=""
        width={40}
        height={40}
      />
    </a>
  );
};
export default Logo;
