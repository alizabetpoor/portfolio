import { EmailProps } from "@/interface/components/email";
import styles from "./style.module.scss";
import { contactData } from "@/static/components/contactSection/contactData";

const Email = ({ isHorizontal = false }: EmailProps) => {
  return (
    <div
      className={`${!isHorizontal ? styles.email : styles["emailHorizontal"]}`}
    >
      <a
        className={`${
          !isHorizontal ? styles.email__link : styles["emailHorizontal__link"]
        }`}
        href={`mailto:${contactData.email}`}
      >
        {contactData.email}
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
