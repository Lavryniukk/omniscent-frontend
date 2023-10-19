import GetStartedButton from "../GetStartedButton/GetStartedButton";

let Title = () => {
  return (
    <div className=" border-x mx-2 overflow-visible overflow-x-clip my-16 border-dashed py-10 flex items-center relative flex-col justify-center space-y-10 border-secondary mt-40 lg:mt-52 xl:mt-60  ">
      <div className=" border-r rotate-45 w-10 h-20 absolute -top-[84px] -left-1 border-dashed border-secondary"></div>
      <div className=" rotate-45 border-b w-20 h-10 absolute -top-[104px] -right-[26px] border-dashed border-secondary"></div>
      <div className=" border-r -rotate-45 w-10 h-20 absolute -bottom-[84px] -left-1 border-dashed border-secondary"></div>
      <div className=" border-b -rotate-45  w-20 h-10 absolute -bottom-[36px] right-0.5 border-dashed border-secondary"></div>

      <h1
        className=" bg-gradient-to-t from-text flex items-center justify-center antialiased px-5 to-text-400 w-full mx-auto leading-none
				   font-roboto tracking-tight text-transparent bg-clip-text font-bold text-center text-[max(32px,min(5vw,76px))] "
      >
        The modern AI solution for self-education
      </h1>
      <div className="w-full border-t border-secondary border-dashed h-1 g-gradient-to-t " />
      <p className=" text-accent flex items-center justify-center w-3/4 text-[max(12px,min(2vw,20px))] text-center ">
        Using generative AI, |product| provides you with everything you need to
        study digital technologies.
      </p>
      <GetStartedButton />
    </div>
  );
};

export default Title;
