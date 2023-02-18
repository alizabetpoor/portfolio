import { LabelProps } from "@/interface/core/label";
import styles from "./style.module.scss";

const Label = ({ text, className = "" }: LabelProps) => {
  return (
    <div className={`${styles.label} ${className}`}>
      <span className={styles.label__square}></span>
      <h6 className={styles.label__text}>{text}</h6>
    </div>
  );
};

export default Label;
