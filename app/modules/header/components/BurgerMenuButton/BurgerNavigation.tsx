import styles from "./Burger.module.css";
type BurgerProps = {
  toggleMenu: () => void; // Define a prop for the toggleMenu function.
  isOpen: boolean; // Define a prop to indicate whether the menu is open.
};

let Burger = ({ toggleMenu, isOpen }: BurgerProps) => {
  return (
    <div className="sm:hidden">
      <label className={`${styles.container}`}>
        <input
          type="checkbox"
          checked={isOpen} // Set the checked state based on the isOpen prop.
          onChange={() => {}} // Provide an empty onChange function to prevent warnings.
          onClick={toggleMenu} // Call the toggleMenu function on click.
        />
        <div className={`${styles.checkmark}`}>
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
