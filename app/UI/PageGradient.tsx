import Image from "next/image";
let PageGradient = () => {
  return (
    <div>
      <Image
        src={"/images/left-grad.png"}
        width={500}
        height={1000}
        className="opacity-50 absolute h-10lg w-1/2 top-0 -z-5 pointer-events-none left-0"
        alt=""
      />
      <Image
        src={"/images/right-grad.png"}
        width={500}
        height={1000}
        className="opacity-50 absolute h-10lg w-1/2 top-0 -z-5 pointer-events-none -right-0"
        alt=""
      />
    </div>
  );
};
export default PageGradient;
