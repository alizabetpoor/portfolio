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
        href="mailto:alizabetpoor80@gmail.com"
      >
        alizabetpoor80@gmail.com
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
