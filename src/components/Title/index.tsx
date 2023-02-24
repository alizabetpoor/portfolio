import { TitleProps } from "@/interface/components/title";
import styles from "./style.module.scss";

const Title = ({
  id,
  number,
  text,
  haveBlur = false,
  className = "",
}: TitleProps) => {
  return (
    <div id={id} className={`${styles.title} ${className}`}>
      <span
        className={`${styles.title__number}${
          haveBlur ? ` ${styles.title__blur}` : ""
        }`}
      >
        0{number}.
      </span>
      <h3 className={styles.title__text}>{text}</h3>
    </div>
  );
};

export default Title;
