import GetStartedButton from "../GetStartedButton/GetStartedButton";

// Component for rendering the title section
let Title = () => {
  return (
    <div className="  mx-2 overflow-visible overflow-x-clip py-20 items-center relative flex-col justify-center space-y-10   ">
      {/* Commented out visual elements */}
      {/* These elements create decorative visual effects and are currently commented out. They can be uncommented for visual enhancements. */
      /*
      <div className=" border-r rotate-45 w-10 h-20 absolute -top-[84px] -left-1 border-dashed border-secondary-700"></div>
      <div className=" rotate-45 border-b w-20 h-10 absolute -top-[104px] -right-[26px] border-dashed border-secondary-700"></div>
      <div className=" border-r -rotate-45 w-10 h-20 absolute -bottom-[84px] -left-1 border-dashed border-secondary-700"></div>
      <div className=" border-b -rotate-45  w-20 h-10 absolute -bottom-[36px] right-0.5 border-dashed border-secondary-700"></div>
      */}

      {/* Main title */}
      <h1
        className=" bg-gradient-to-t from-text flex items-center w-10/12 justify-center antialiased px-5 to-text-500  mx-auto leading-none
				   font-inter  tracking-tight hyphens-none  text-transparent bg-clip-text font-extrabold text-center text-[max(32px,min(5vw,76px))] "
      >
        The AI solution for self-education
      </h1>
      {/* Horizontal rule */}
      {/* <div className="w-full border-t border-secondary-700 border-dashed h-1 g-gradient-to-t " /> */}

      {/* Description text */}
      <p className=" text-accent hyphens-auto leading-relaxed mt-40 mx-auto font-light flex items-center justify-center w-3/4 text-[max(15px,min(2vw,20px))] text-center ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
        erat erat. Integer blandit, nulla quis fermentum hendrerit, nisi leo
        tincidunt ante, non tincidunt augue magna sed velit.
      </p>

      {/* Get Started Button Component */}
      <GetStartedButton />
    </div>
  );
};

export default Title;
