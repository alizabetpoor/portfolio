import { MenuIconProps } from "@/interface/components/header/menuIcon";
import styles from "./style.module.scss";

const MenuIcon = ({ onClick, ariaExpanded }: MenuIconProps & { ariaExpanded: boolean }) => {
  return (
    <button type="button" aria-label={ariaExpanded ? "Close navigation menu" : "Open navigation menu"} aria-controls="mobile-navigation" aria-expanded={ariaExpanded} onClick={onClick} className={styles.menuIcon}>
      <span className={styles.menuIcon__firstLine}></span>
      <span className={styles.menuIcon__secondLine}></span>
      <span className={styles.menuIcon__thirdLine}></span>
    </button>
  );
};

export default MenuIcon;
