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
          I worked with more than a year with the javascript and react library.
          I'm also studying for a{" "}
          <span className={styles.bioSection__body__detail__degree}>
            <span></span>
            {bioSectionData.degreeOfEducation}
          </span>{" "}
          in computer engineering.
        </p>
        <a href="#contact">
          <Button>Contact Me</Button>
        </a>
      </div>
    </div>
  );
};

export default BioSection;
