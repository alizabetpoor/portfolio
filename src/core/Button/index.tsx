import { ButtonProps } from "@/interface/core/button";
import styles from "./style.module.scss";

const Button = ({
  onClick = () => {},
  children,
  width,
  height,
  backgroundColor,
  color,
  fontSize,
  className = "",
  haveHover = false,
  haveBackdrop = true,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button}${
        haveBackdrop ? ` ${styles.button__backdrop}` : ""
      } ${className}${haveHover ? ` ${styles.button__hover}` : ""}`}
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        color: color,
        fontSize: fontSize,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
