import { EmailProps } from "@/interface/components/email";
import styles from "./style.module.scss";

const Email = ({ isHorizontal = false }: EmailProps) => {
  return (
    <div
      className={`${!isHorizontal ? styles.email : styles["emailHorizontal"]}`}
    >
      <a
        className={`${
          !isHorizontal ? styles.email__link : styles["emailHorizontal__link"]
        }`}
        href="mailto:ali_0_zabetpoor@ymail.com"
      >
        ali_0_zabetpoor@ymail.com
      </a>
      <div
        className={`${
          !isHorizontal ? styles.email__line : styles["emailHorizontal__line"]
        }`}
      ></div>
    </div>
  );
};

export default Email;
