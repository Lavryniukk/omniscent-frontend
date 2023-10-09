type Props = {
  id?: string;
  children: React.ReactNode;
};
let Slot = ({ id, children }: Props) => {
  return (
    <div
      key={id}
      className="w-full flex items-center hover:cursor-pointer text-xl justify-center text-accent select-none border h-20 rounded-lg border-dashed border-accent"
    >
      {children}
    </div>
  );
};
export default Slot;
