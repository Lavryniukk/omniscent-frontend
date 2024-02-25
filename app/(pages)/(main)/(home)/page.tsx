import FeaturesSection from "./ui/FeaturesSection";
import FeedbackSection from "./ui/FeedbackSection";
import HeroSection from "./ui/HeroSection";


function Home() {
  return (
    <main className="mb-10 mt-16 max-w-10xl font-inter overflow-hidden flex flex-col justify-start h-fit overflow-y-auto bg-transparent mx-auto box-border w-full">
      <HeroSection />
      <FeaturesSection />
      <FeedbackSection />
    </main>
  );
}

export default Home;
