import ReviewCard from "./components/ReviewCard/ReveiwCard";

let Reviews = () => {
  return (
    <div className="box-border py-20 w-full mx-auto space-y-10 overflow-x-hidden font-normal p-4 bg-transparent h-fit max-w-10xl">
      <h2 className="text-center text-text text-4xl font-medium font">
        Reviews
      </h2>
      <div className="max-w-[1200px] w-full sm:w-3/4 md:w-1/2 lg:w-full mx-auto gap-2 flex lg:flex-row flex-col">
        <ReviewCard
          rating={5}
          name={"Masha"}
          nickname={"masha_learns"}
          content={`The platform's interface is sleek, intuitive, and user-friendly. It's not just about the content, but the whole experience has made my learning journey both enjoyable and efficient.
		  `}
          imageUrl={"/images/masha.png"}
        />
        <ReviewCard
          rating={5}
          name={"Jordan"}
          nickname={"jord_thinks"}
          imageUrl={"/images/legend.png"}
          content={`I'm genuinely impressed with the depth and breadth of content available. It's opened up a world of exploration for me, and I've delved into topics I didn't even realize I was curious about.`}
        />
        <ReviewCard
          rating={4}
          name={"Aisha"}
          nickname={"aisha_grows"}
          imageUrl={"/images/nikolauchuk.jpg"}
          content={`The artificial mentor feature stands out as a unique and valuable tool. Having personalized feedback and guidance tailored to my needs has significantly accelerated my progress.`}
        />
      </div>
    </div>
  );
};

export default Reviews;
