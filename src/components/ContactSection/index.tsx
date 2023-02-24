import Title from "@/components/Title";
import ContactBox from "@/components/ContactSection/ContactBox";
import Button from "@/core/Button";
import Box from "@/core/Box";
import { contactData } from "@/static/components/contactSection/contactData";
import styles from "./style.module.scss";

const ContactSection = () => {
  return (
    <div className={styles.contact}>
      <Title
        id="contact"
        className={styles.contact__title}
        text="What’s Next?"
        number={3}
      />
      <div className={styles.contact__container}>
        <ContactBox />
        <div className={styles.contact__container__description}>
          <span className={styles.contact__container__description__title}>
            Get In Touch
          </span>
          <span className={styles.contact__container__description__text}>
            {contactData.description}
          </span>
          <a href="mailto:ali_0_zabetpoor@ymail.com">
            <Button className={styles.contact__container__description__button}>
              Say Hello!
            </Button>
          </a>
        </div>
      </div>
      <Box className={styles.contact__ui}>
        <span>
          Design By{" "}
          <a target="_blank" rel="noreferrer" href="https://t.me/Nimnzr">
            NimaNzri
          </a>
        </span>
      </Box>
    </div>
  );
};

export default ContactSection;
