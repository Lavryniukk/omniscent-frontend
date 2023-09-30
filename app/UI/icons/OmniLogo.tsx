import Image from "next/image";
let Logo = () => {
  return (
    <div className="sm:w-32 w-fit group">
      <div className="mx-auto relative rounded-full w-7 h-7 border-4 border-primary ">
        <div className="absolute -top-3 -left-2.5 rounded-full rotate-45 group-hover:rotate-[405deg] transition-transform duration-500 h-10 w-10 border-l-4 border-t-4 border-primary" />
        <div className="absolute top-1 left-1 rounded-full rotate-45 h-3 group-hover:-rotate-[315deg]  w-3 transition-transform duration-500  border-l-2 border-t-2 border-primary" />
      </div>
    </div>
  );
};
export default Logo;
