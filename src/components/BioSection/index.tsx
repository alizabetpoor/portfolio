import Header from "@/components/Header";
import Button from "@/core/Button";
import { bioSectionData } from "@/static/components/bioSection/bioSection";
import styles from "./style.module.scss";

const BioSection = () => {
  return (
    <section className={styles.bioSection} aria-label="Introduction">
      <Header />
      <div className={styles.bioSection__body}>
        <span className={styles.bioSection__body__introduce}>
          Hi, my name is
        </span>
        <h1 className={styles.bioSection__body__name}>
          {bioSectionData.name}
        </h1>
        <h2 className={styles.bioSection__body__position}>
          {bioSectionData.position}
        </h2>
        <p className={styles.bioSection__body__detail}>
          I build responsive web applications with React, Next.js, and
          TypeScript. I hold a{" "}
          <span className={styles.bioSection__body__detail__degree}>
            {bioSectionData.degreeOfEducation}
          </span>{" "}
          from the University of Mazandaran.
        </p>
        <Button href="#contact">
          Contact Me
        </Button>
      </div>
    </section>
  );
};

export default BioSection;
