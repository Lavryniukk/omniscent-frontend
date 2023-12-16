export default function FormSubmit() {
  return (
    <button
      type="submit"
      className={`text-background bg-text text-xl w-full font-medium px-5 py-4 box-border border-text transition-colors duration-200 border sm:w-3/4 mx-auto rounded-md 
        hover:text-text hover:bg-background
     `}
    >
      Create
    </button>
  );
}
