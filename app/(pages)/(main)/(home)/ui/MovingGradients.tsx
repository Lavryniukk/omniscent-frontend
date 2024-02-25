const MovingGradients = () => {
  return (
    <>
      <div
        className={`left-0 background-left origin-left animate-movingBackgroundLeft -z-50 opacity-90 w-[70%] h-[120vh] absolute -top-[10vh]`}
      >
        <div className="w-full h-full bg-gradient-to-r absolute from-primary/30 -z-[40] to-90% to-background border-text" />
      </div>

      <div
        className={`right-0 background-right origin-right animate-movingBackgroundRight -z-50 opacity-90 w-[70%] h-[120vh] absolute -top-[10vh] `}
      >
        <div className="w-full h-full bg-gradient-to-l absolute from-primary/30 -z-[40] to-90% to-background border-text" />
      </div>
    </>
  );
};
export default MovingGradients;
