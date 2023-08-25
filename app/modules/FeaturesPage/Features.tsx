import {
  FaSearch,
  FaBullseye,
  FaRoute,
  FaChartLine,
  FaBook,
  FaVideo,
} from "react-icons/fa";

let Features = () => {
  return (
    <div
      className=" features overflow-x-hidden h-fit bg-transparent my-20 mx-auto box-border max-w-10xl
	w-full"
    >
      <h2 className="text-text font-roboto font-medium mx-auto text-center text-5xl md:text-4xl">
        What`s Omniscient?
      </h2>
      <p className="font-roboto font-light mx-auto text-accent text-sm w-2/3 md:text-lg md:w-1/2 text-center mt-16">
        Omniscient Personal is an{" "}
        <span className=" underline-offset-4 under underline decoration-primary">
          AI-driven
        </span>{" "}
        platform, which assists with self-education and serves as a personal
        tutor. Omniscient ensures personalized, consistent, and effective
        self-education using generative AI.
      </p>
      <div className="grid mt-10 w-full h-fit box-border px-10 gap-2 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 shadow-md hover:border-accent h-fit md:min-h-md lg:min-h-lg xl:min-h-md transition-colors duration-300 bg-transparent border-2 border-secondary rounded-xl">
          <h2 className="text-text font-roboto font-medium text-lg md:text-xl lg:text-2xl 2xl:text-3xl mb-2">
            <FaSearch className="mb-1 mr-2 inline-block" />
            Exploration
          </h2>
          <p className="text-accent lg:text-md 2xl:text-lg font-roboto font-light">
            Knowledge is interconnected, not linear. Discover nodes of
            information that fit into a bigger puzzle. Relationships between
            nodes provide a flexible and clear learning experience. Engage in
            tailored AI-guided discussions on specific aspects, creating
            personalized lessons.
          </p>
        </div>
        <div className="p-5 shadow-md hover:border-accent h-fit md:min-h-md lg:min-h-lg xl:min-h-md transition-colors duration-300 bg-transparent border-2 border-secondary rounded-xl">
          <h2 className="text-text font-roboto font-medium text-lg md:text-xl lg:text-2xl 2xl:text-3xl mb-2">
            <FaBullseye className="mb-1 mr-2 inline-block" />
            AI-Powered Goal Setting and Time-Management
          </h2>
          <p className="text-accent lg:text-md 2xl:text-lg font-roboto font-light">
            At the beginning and during your self-learning project, AI helps you
            determine the specific goals to achieve, determines your context and
            preferences, helps you with setting up a schedule.
          </p>
        </div>
        <div className="p-5 shadow-md hover:border-accent h-fit md:min-h-md lg:min-h-lg xl:min-h-md transition-colors duration-300 bg-transparent border-2 border-secondary rounded-xl">
          <h2 className="text-text font-roboto font-medium text-lg md:text-xl lg:text-2xl 2xl:text-3xl mb-2">
            <FaRoute className="mb-1 mr-2 inline-block" />
            AI-Powered Management of Learning Path and Progress
          </h2>
          <p className="text-accent lg:text-md 2xl:text-lg font-roboto font-light">
            You can chat with AI about your entire self-education path, your
            progress, you can ask to assist you with creating a unique path, or
            adjust preferences.
          </p>
        </div>
        <div className="p-5 shadow-md hover:border-accent h-fit md:min-h-md lg:min-h-lg xl:min-h-md transition-colors duration-300 bg-transparent border-2 border-secondary rounded-xl">
          <h2 className="text-text font-roboto font-medium text-lg md:text-xl lg:text-2xl 2xl:text-3xl mb-2">
            <FaChartLine className=" mb-1 mr-2 inline-block" />
            AI-Powered Personal Assessment, Evaluation, and Reflection
          </h2>
          <p className="text-accent lg:text-md 2xl:text-lg font-roboto font-light">
            The AI is able to provide personal feedback, assess your knowledge
            and generally adjust to your overall performance.
          </p>
        </div>
        <div className="p-5 shadow-md hover:border-accent h-fit md:min-h-md lg:min-h-lg xl:min-h-md transition-colors duration-300 bg-transparent border-2 border-secondary rounded-xl">
          <h2 className="text-text font-roboto font-medium text-lg md:text-xl lg:text-2xl 2xl:text-3xl mb-2">
            <FaBook className=" mb-1 mr-2 inline-block" />
            Search for Knowledge or Provide Your Custom Content
          </h2>
          <p className="text-accent lg:text-md 2xl:text-lg font-roboto font-light">
            Omniscient, using semantic search, is able to provide the AI with
            the necessary context and learning material, such as books,
            documentation, and other content. You can also add your own
            material, such as personal books, conspect, etc.
          </p>
        </div>
        <div className="p-5 shadow-md hover:border-accent h-fit md:min-h-md lg:min-h-lg xl:min-h-md transition-colors duration-300 bg-transparent border-2 border-secondary rounded-xl">
          <h2 className="text-text font-roboto font-medium text-lg md:text-xl lg:text-2xl 2xl:text-3xl mb-2">
            <FaVideo className=" mb-1 mr-2 inline-block" />
            Search for Content, Multimedia Learning Experience
          </h2>
          <p className="text-accent lg:text-md 2xl:text-lg font-roboto font-light">
            If needed, the AI is able to search or generate additional context
            such as websites, images, videos, audio, to provide a better
            learning experience.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
