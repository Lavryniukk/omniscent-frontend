type BurgerProps = {
  callback: () => void; // Define a prop for the toggleMenu function.
  isOpen: boolean; // Define a prop to indicate whether the menu is open.
};

let Burger = ({ callback, isOpen }: BurgerProps) => {
  return (
    <div className="md:hidden w-fit flex justify-end md:justify-center items-center">
      <label className={`container`}>
        <input
          type="checkbox"
          checked={isOpen} // Set the checked state based on the isOpen prop.
          onChange={() => {}} // Provide an empty onChange function to prevent warnings.
          onClick={callback} // Call the toggleMenu function on click.
        />
        <div className={`checkmark`}>
          {/* Apply the CSS styles defined in Burger.module.css to the checkmark. */}
          <span className="bg-text"></span>
          {/* Display three spans as background elements. */}
          <span className="bg-text"></span>
          <span className="bg-text"></span>
        </div>
      </label>
    </div>
  );
};

export default Burger;
