let SubmitButton = ({ handler }: { handler: () => void }) => {
  return (
    <button
      onClick={handler}
      className="w-1/4 bg-secondary min-w-[100px] group select-none relative flex  before:absolute before:w-0 before:after:w-1/2 before:duration-200 before:h-full before:bg-secondary-700 before:rounded-r-xl before:right-0 hover:before:w-1/2 before:transition-all after:transition-all after:duration-200 items-center rounded-xl mx-auto border justify-center overflow-hidden  after:bg-secondary-700 after:absolute after:w-0 hover:after:w-1/2 after:h-full after:rounded-l-xl after:left-0 space-x-2 h-10"
    >
      <p className="z-10 text-accent-300 group-hover:text-text">Create</p>
    </button>
  );
};
export default SubmitButton;
