import Button from "@/core/Button";
import Link from "next/link";
import Theme from "@/styles/Theme";
import MobileMenu from "./MobileMenu";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" aria-label="Ali Zabetpour home">
        <div className={styles.header__square}></div>
      </Link>
      <nav aria-label="Main navigation" data-testid="header" className={styles.header__buttons}>
          <Button
            href="#about"
            width="fit-content"
            backgroundColor="transparent"
            color={Theme.lightGray}
            fontSize={20}
            haveHover
          >
            About Me
          </Button>
          <Button
            href="#experience"
            backgroundColor="transparent"
            width="fit-content"
            color={Theme.lightGray}
            fontSize={20}
            haveHover
          >
            Experience
          </Button>
          <Button href="#contact" className="header__buttons__contact">Contact Me</Button>
      </nav>
      <MobileMenu />
    </header>
  );
};

export default Header;
