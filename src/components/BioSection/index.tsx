import Header from "@/components/Header";
import Button from "@/core/Button";
import { bioSectionData } from "@/static/components/bioSection/bioSection";
import styles from "./style.module.scss";

const BioSection = () => {
  return (
    <div className={styles.bioSection}>
      <Header />
      <div className={styles.bioSection__body}>
        <span className={styles.bioSection__body__introduce}>
          Hi, my name is
        </span>
        <h2 className={styles.bioSection__body__name}>
          {bioSectionData.name}.
        </h2>
        <h3 className={styles.bioSection__body__position}>
          I'm a {bioSectionData.position}.
        </h3>
        <p className={styles.bioSection__body__detail}>
          I have been working with JavaScript and the React library for over a
          year. I pursued a{" "}
          <span className={styles.bioSection__body__detail__degree}>
            {bioSectionData.degreeOfEducation}
          </span>{" "}
          in Computer Engineering and I'm also gaining experience with various
          technologies.
        </p>
        <a href="#contact">
          <Button>Contact Me</Button>
        </a>
      </div>
    </div>
  );
};

export default BioSection;
