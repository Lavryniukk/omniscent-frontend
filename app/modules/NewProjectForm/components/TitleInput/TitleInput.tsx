let TitleInput = ({
  title,
  handler,
}: {
  title: string;
  handler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="w-full flex items-center  flex-col xl:flex-row  justify-between space-x-2 h-18">
      <p className="text-accent text-lg">Project Title</p>
      <textarea
        value={title}
        onChange={(event) => handler(event)}
        className="w-3/4 border h-full bg-secodnary resize-none text-sm bg-background rounded-xl p-2 whitespace-normal text-accent"
      ></textarea>
    </div>
  );
};
export default TitleInput;
