import { BoxProps } from "@/interface/core/box";
import styles from "./style.module.scss";

const Box = ({ className, children }: BoxProps) => {
  return <div className={`${styles.box} ${className}`}>{children}</div>;
};

export default Box;
