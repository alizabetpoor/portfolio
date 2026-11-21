"use client";

import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

const GoUp = () => {
  const squareRef = useRef<HTMLButtonElement>(null);

  const onScroll = () => {
    if (squareRef.current) {
      const scrollRange = document.body.offsetHeight - window.innerHeight;
      const scrollHeight = scrollRange > 0 ? window.pageYOffset / scrollRange : 0;
      squareRef.current.style.animationDelay = `${scrollHeight * -1}s`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      ref={squareRef}
      type="button"
      aria-label="Back to top"
      className={`${styles.goUp} ${styles["goUp--animate"]}`}
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
    >
      <div className={styles.goUp__parentSquare}>
        <div className={styles.goUp__parentSquare__insideSquare}></div>
      </div>
    </button>
  );
};

export default GoUp;
