"use client";

import Email from "@/components/Email";
import Social from "@/components/Social";
import Button from "@/core/Button";
import Theme from "@/styles/Theme";
import useOnClickOutside from "@/utils/useOnClickOutside";
import { useCallback, useEffect, useRef, useState } from "react";
import MenuIcon from "./MenuIcon";
import styles from "./style.module.scss";

const MobileMenu = () => {
  const [showMenuBody, setShowMenuBody] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleClose = useCallback(() => setShowMenuBody(false), []);

  const handleMenuIconClick = (): void => {
    setShowMenuBody((prev) => {
      return !prev;
    });
  };

  useOnClickOutside(menuRef, handleClose);

  useEffect(() => {
    if (!showMenuBody) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [showMenuBody, handleClose]);

  return (
    <div ref={menuRef} className={styles.mobileMenu}>
      <div className={styles.mobileMenu__icon}>
        <MenuIcon onClick={handleMenuIconClick} ariaExpanded={showMenuBody} />
      </div>
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!showMenuBody}
        className={`${styles.mobileMenu__body}${
          showMenuBody ? ` ${styles["mobileMenu--show"]}` : ""
        } `}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close navigation menu"
          className={styles.mobileMenu__body__cross}
        />
        <div className={styles.mobileMenu__body__buttons}>
          <Button
              href="#about"
              onClick={handleClose}
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
              onClick={handleClose}
              backgroundColor="transparent"
              width="fit-content"
              color={Theme.lightGray}
              fontSize={20}
              haveHover
            >
              Experience
            </Button>
          <Button
              href="#contact"
              onClick={handleClose}
              className="header__buttons__contact"
            >
              Contact Me
            </Button>
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
