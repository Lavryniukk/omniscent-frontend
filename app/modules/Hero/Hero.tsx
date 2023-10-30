import Title from "./components/Title/Title";

let Home = () => {
  return (
    <div className=" min-h-screen max-h-fit relative border-b border-secondary overflow-hidden">
      <Title />
      <div className="absolute bottom-0 bg-gradient-to-t from-primary-950 to-background blur-3xl w-full h-16"></div>
    </div>
  );
};
export default Home;
