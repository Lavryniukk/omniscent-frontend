import styles from "./Burger.module.css";
type BurgerProps = {
  toggleMenu: () => void;
  isOpen: boolean;
};
let Burger = ({ toggleMenu, isOpen }: BurgerProps) => {
  return (
    <div className="sm:hidden">
      <label className={`${styles.container} `}>
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => {}}
          onClick={toggleMenu}
        />
        <div className={`${styles.checkmark}`}>
          <span className="bg-text"></span>
          <span className="bg-text"></span>
          <span className="bg-text"></span>
        </div>
      </label>
    </div>
  );
};
export default Burger;
