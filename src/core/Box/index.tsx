import { BoxProps } from "@/interface/core/box";
import styles from "./style.module.scss";

const Box = ({ as: Component = "div", className = "", children, ...props }: BoxProps) => {
  return <Component className={`${styles.box} ${className}`} {...props}>{children}</Component>;
};

export default Box;
