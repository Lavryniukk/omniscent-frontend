import Image from "next/image";
let Logo = () => {
  return (
    <div className="flex mx-auto items-center  h-full ">
      <Image
        src="/images/logo-cleverize-white.svg"
        className="sm:mx-auto ml-0"
        alt=""
        width={40}
        height={40}
        priority
      />
    </div>
  );
};
export default Logo;
