import dynamic from "next/dynamic";
const Features = dynamic(() => import("@/app/modules/featuresPage/Features"), {
  ssr: false,
});
const Home = dynamic(() => import("@/app/modules/homePage/Home"), {
  ssr: false,
});
let HomePage = () => {
  return (
    <>
      <Home />
      <Features />
    </>
  );
};
export default HomePage;
