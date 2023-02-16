import Button from "@/core/Button";
import Theme from "@/styles/Theme";
import MobileMenu from "./MobileMenu";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.header__square}></div>
      </div>
      <div data-testid="header" className={styles.header__buttons}>
        <a href="#about">
          <Button
            width="fit-content"
            backgroundColor="transparent"
            color={Theme.lightGray}
            fontSize={20}
            haveHover
          >
            About Me
          </Button>
        </a>
        <a href="#experience">
          <Button
            backgroundColor="transparent"
            width="fit-content"
            color={Theme.lightGray}
            fontSize={20}
            haveHover
          >
            Experience
          </Button>
        </a>
        <a href="#contact">
          <Button className="header__buttons__contact">Contact Me</Button>
        </a>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Header;
