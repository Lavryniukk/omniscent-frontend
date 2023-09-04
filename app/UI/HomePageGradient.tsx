import Image from "next/image";
type Props = {
  left: string;
  right: string;
};
let PageGradient = ({ left, right }: Props) => {
  return (
    <div>
      <Image
        src={left}
        width={500}
        height={1000}
        className={`opacity-60 w-1/2 absolute h-10lg top-0 -z-5 pointer-events-none -left-0`}
        alt=""
      />
      <Image
        src={right}
        width={500}
        height={1000}
        className={`opacity-60 w-1/2 absolute h-10lg top-0 -z-5 pointer-events-none -right-0`}
        alt=""
      />
    </div>
  );
};
export default PageGradient;
