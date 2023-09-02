import Image from "next/image";
type Props = {
  left?: string;
  right?: string;
  url: string;
};
let PageGradient = ({ url }: Props) => {
  return (
    <div>
      {/* <Image
        src={left}
        width={500}
        height={1000}
        className={`opacity-60 absolute h-10lg top-0 -z-5 pointer-events-none -left-0`}
        alt=""
      />
      <Image
        src={right}
        width={500}
        height={1000}
        className={`opacity-60 absolute h-10lg top-0 -z-5 pointer-events-none -right-0`}
        alt=""
      /> */}
      <Image
        alt=""
        src={url}
        width={1000}
        height={500}
        className={`opacity-60 absolute top-0 mx-auto border select-none -z-5 pointer-events-none`}
      />
    </div>
  );
};
export default PageGradient;
