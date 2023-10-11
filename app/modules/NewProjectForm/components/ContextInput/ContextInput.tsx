let ContextInput = ({
  context,
  handler,
}: {
  context: string;
  handler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="w-full flex items-center flex-col xl:flex-row justify-between space-x-2 h-32">
      <p className="text-accent text-lg">Project Context</p>
      <div className="w-3/4 h-full border flex rounded-xl">
        <textarea
          onChange={(e) => handler(e)}
          name=""
          value={context}
          className="w-full h-full bg-secodnary resize-none text-sm bg-background rounded-xl p-2 whitespace-pre-wrap text-accent"
        ></textarea>
      </div>
    </div>
  );
};
export default ContextInput;
