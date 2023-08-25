import Image from "next/image";
let Logo = () => {
  return (
    <div>
      <div className="mx-auto relative rounded-full w-7 h-7 border-4 border-primary ">
        <div className="absolute -top-3 -left-2.5 rounded-full rotate-45 h-10 w-10 border-l-4 border-t-4 border-primary" />
        <div className="absolute top-1 left-1 rounded-full rotate-45 h-3 w-3 border-l-2 border-t-2 border-primary" />
      </div>
    </div>
  );
};
export default Logo;
//320 //224 //96
