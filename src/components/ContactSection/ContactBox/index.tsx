import Box from "@/core/Box";
import { contactData } from "@/static/components/contactSection/contactData";
import styles from "./style.module.scss";

const ContactBox = () => {
  return (
    <Box as="dl" className={styles.contactBox}>
      <div className={styles.contactBox__item}>
        <dt>Phone</dt>
        <dd><a href={`tel:${contactData.phoneNumber.replace(/[^+\d]/g, "")}`}>{contactData.phoneNumber}</a></dd>
      </div>
      <div className={styles.contactBox__item}>
        <dt>Email</dt>
        <dd><a href={`mailto:${contactData.email}`}>{contactData.email}</a></dd>
      </div>
      <div className={styles.contactBox__item}>
        <dt>Location</dt>
        <dd>{contactData.location}</dd>
      </div>
    </Box>
  );
};

export default ContactBox;
