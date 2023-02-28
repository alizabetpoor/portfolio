import Email from "@/components/Email";
import Social from "@/components/Social";
import Button from "@/core/Button";
import Theme from "@/styles/Theme";
import useOnClickOutside from "@/utils/useOnClickOutside";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "./MenuIcon";
import styles from "./style.module.scss";

const MobileMenu = () => {
  const [showMenuBody, setShowMenuBody] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  let animateTimeout: ReturnType<typeof setTimeout>;

  const togglePageScroll = (prevShowMenuState: boolean) => {
    if (!prevShowMenuState) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "auto";
  };

  const menuItemClickHandler = (): void => {
    handleClickOutside();
  };

  const handleClickOutside = (): void => {
    if (showMenuBody) {
      if (bodyRef.current) {
        bodyRef.current.className += ` ${styles["mobileMenu--hide"]}`;
        animateTimeout = setTimeout(() => {
          togglePageScroll(true);
          setShowMenuBody(false);
        }, 550);
      }
    }
  };

  const handleMenuIconClick = (): void => {
    setShowMenuBody((prev) => {
      togglePageScroll(prev);
      return !prev;
    });
  };

  useOnClickOutside(bodyRef, handleClickOutside);

  useEffect(() => {
    return () => {
      clearTimeout(animateTimeout);
    };
  }, []);

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.mobileMenu__icon}>
        <MenuIcon onClick={handleMenuIconClick} />
      </div>
      <div
        ref={bodyRef}
        className={`${styles.mobileMenu__body}${
          showMenuBody ? ` ${styles["mobileMenu--show"]}` : ""
        } `}
      >
        <div
          onClick={handleClickOutside}
          className={styles.mobileMenu__body__cross}
        ></div>
        <div className={styles.mobileMenu__body__buttons}>
          <a href="#about">
            <Button
              onClick={menuItemClickHandler}
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
              onClick={menuItemClickHandler}
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
            <Button
              onClick={menuItemClickHandler}
              className="header__buttons__contact"
            >
              Contact Me
            </Button>
          </a>
        </div>
        <div className={styles.mobileMenu__body__contact}>
          <Social isHorizontal={true} />
          <Email isHorizontal={true} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
