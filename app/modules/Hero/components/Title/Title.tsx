import GetStartedButton from "../GetStartedButton/GetStartedButton";

// Component for rendering the title section
let Title = () => {
  return (
    <div className="  overflow-visible overflow-x-clip py-20 items-center relative flex-col justify-center space-y-10 max-w-10xl mx-auto">
      {/* Main title */}
      <h1
        className="observe transition delay-0 duration-500 bg-gradient-to-t from-text flex items-center w-10/12 justify-center antialiased px-5 to-text-500  mx-auto leading-none
				   font-inter  tracking-tight hyphens-none  text-transparent bg-clip-text font-extrabold text-center text-[max(32px,min(5vw,76px))] "
      >
        The AI solution for self-education
      </h1>

      {/* Description text */}
      <p className="observe transition delay-100 duration-500 text-accent hyphens-auto leading-relaxed mt-40 mx-auto font-light flex items-center justify-center w-3/4 text-[max(15px,min(2vw,20px))] text-center ">
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
