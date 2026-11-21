import { LabelProps } from "@/interface/core/label";
import styles from "./style.module.scss";

const Label = ({ text, className = "" }: LabelProps) => {
  return (
    <div className={`${styles.label} ${className}`}>
      <span className={styles.label__square} aria-hidden="true" />
      <span className={styles.label__text}>{text}</span>
    </div>
  );
};

export default Label;
