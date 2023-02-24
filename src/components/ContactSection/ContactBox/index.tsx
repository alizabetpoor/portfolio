import Box from "@/core/Box";
import { contactData } from "@/static/components/contactSection/contactData";
import styles from "./style.module.scss";

const ContactBox = () => {
  return (
    <Box className={styles.contactBox}>
      <div className={styles.contactBox__item}>
        <span>Number</span>
        <span>{contactData.phoneNumber}</span>
      </div>
      <div className={styles.contactBox__item}>
        <span>E-mail</span>
        <span>{contactData.email}</span>
      </div>
      <div className={styles.contactBox__item}>
        <span>Location</span>
        <span>{contactData.location}</span>
      </div>
    </Box>
  );
};

export default ContactBox;
