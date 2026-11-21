import Title from "@/components/Title";
import ContactBox from "@/components/ContactSection/ContactBox";
import Button from "@/core/Button";
import Box from "@/core/Box";
import { contactData } from "@/static/components/contactSection/contactData";
import styles from "./style.module.scss";

const ContactSection = () => (
  <section className={styles.contact} aria-labelledby="contact-heading">
    <Title id="contact" className={styles.contact__title} text="What’s Next?" number={3} />
    <div className={styles.contact__container}>
      <ContactBox />
      <div className={styles.contact__message}>
        <h3 className={styles.contact__messageTitle}>Get in touch</h3>
        <p className={styles.contact__messageText}>{contactData.description}</p>
        <Button href={`mailto:${contactData.email}`} className={styles.contact__messageButton}>
          Say hello
        </Button>
      </div>
    </div>
    <Box className={styles.contact__credit}>
      <span>
        Design by{" "}
        <a target="_blank" rel="noreferrer noopener" href="https://t.me/Nimnzr">
          NimaNzri
        </a>
      </span>
    </Box>
  </section>
);

export default ContactSection;
