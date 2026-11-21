import { ButtonProps } from "@/interface/core/button";
import styles from "./style.module.scss";

const Button = ({
  onClick,
  href,
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
  return href ? (
    <a
      href={href}
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
    </a>
  ) : (
    <button
      type="button"
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
