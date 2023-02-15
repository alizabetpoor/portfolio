import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

const GoUp = () => {
  const squareRef = useRef(null);

  const onScroll = () => {
    if (squareRef.current) {
      const scrollHeight =
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      squareRef.current.style.animationDelay = `${scrollHeight * -1}s`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={squareRef}
      className={`${styles.goUp} ${styles["goUp--animate"]}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className={styles.goUp__parentSquare}>
        <div className={styles.goUp__parentSquare__insideSquare}></div>
      </div>
    </div>
  );
};

export default GoUp;
