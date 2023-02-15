import { MenuIconProps } from "@/interface/components/header/menuIcon";
import styles from "./style.module.scss";

const MenuIcon = ({ onClick }: MenuIconProps) => {
  return (
    <div onClick={onClick} className={styles.menuIcon}>
      <span className={styles.menuIcon__firstLine}></span>
      <span className={styles.menuIcon__secondLine}></span>
      <span className={styles.menuIcon__thirdLine}></span>
    </div>
  );
};

export default MenuIcon;
