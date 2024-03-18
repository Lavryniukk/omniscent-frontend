type BurgerProps = {
  callback: () => void; // Define a prop for the toggleMenu function.
  isOpen: boolean; // Define a prop to indicate whether the menu is open.
};

let Burger = ({ callback, isOpen }: BurgerProps) => {
  return (
    <div className="md:hidden burger w-10  flex justify-end md:justify-center items-center">
      <label className={`container`}>
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => {}}
          onClick={callback}
        />
        <div className={`checkmark`}>
          <span className="bg-muted-foreground"></span>
          <span className="bg-muted-foreground"></span>
          <span className="bg-muted-foreground"></span>
        </div>
      </label>
    </div>
  );
};

export default Burger;
