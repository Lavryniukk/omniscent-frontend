import CardSection from "./components/CardSection/CardSection";

let Features = () => {
  return (
    <div className="box-border mt-40 w-full mx-auto space-y-10 overflow-x-hidden font-normal p-4 bg-transparent h-fit max-w-10xl">
      <h2 className="mx-auto text-4xl text-center text-text font-inter">
        What you obtain?
      </h2>
      {/* <p className="w-2/3 mx-auto text-sm font-light text-center font-inter text-accent md:text-lg md:w-1/2">
        Omniscient Personal is an{" "}
        <span className="underline underline-offset-4 decoration-primary">
          AI-driven
        </span>{" "}
        platform, which assists with self-education and serves as a personal
        tutor. Omniscient ensures personalized, consistent, and effective
        self-education using generative AI.
      </p> */}
      <CardSection />
    </div>
  );
};
export default Features;
