let Input = () => {
  return (
    <div className=" w-80 h-10 select-none mt-10  overflow-hidden border border-accent focus:border-text outline-none rounded-lg mx-auto ">
      <input
        type="text"
        placeholder="I want to learn..."
        className="bg-secondary w-9/12 h-full px-2 text-accent box-border outline-none "
      />
      <button type="submit" className="text-text w-3/12 h-full box-border">
        send
      </button>
    </div>
  );
};
export default Input;
