import PageGradient from "@/app/UI/PageGradient";
// import TypingAnimation from "@/app/UI/TypingAnimation";
// import HomeButtons from "@/app/components/HomeButtons/HomeButtons";

const Home = () => {
  return (
    <div
      className="home overflow-x-hidden h-fit bg-transparent mx-auto box-border max-w-10xl
					  w-full py-40 sm:py-52 md:py-64"
    >
      <PageGradient />
      {/* <h1
        className="text-5xl tracking-wider text-text sm:text-6xl
					  md:text-7xl lg:text-8xl font-roboto font-bold text-center "
      >
        Become <span className="text-primary">Omniscient</span>
      </h1>
      <TypingAnimation />
      <HomeButtons /> */}
    </div>
  );
};
export default Home;
