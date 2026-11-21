import Box from "@/core/Box";
import Label from "@/core/Label";
import Title from "../Title";
import { aboutSectionData } from "@/static/components/aboutSection/aboutSectionData";
import Image from "next/image";
import styles from "./style.module.scss";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection} aria-labelledby="about-heading">
      <Title id="about" number={1} text="About Me" />
      <div className={styles.aboutSection__describe}>
        <Box className={styles.aboutSection__describe__box}>
          {aboutSectionData.describeText}
          <div
            data-testid="skills"
            className={styles.aboutSection__describe__box__skills}
          >
            {aboutSectionData.skills.map((skill) => (
              <Label key={skill.id} text={skill.name} />
            ))}
          </div>
        </Box>
        <div
          data-testid="image"
          className={styles.aboutSection__describe__photo}
        >
          <div className={styles.aboutSection__describe__photo__container}>
            <Image
              alt="Portrait of Ali Zabetpour"
              src="/assets/images/personalpic.jpg"
              fill
              sizes="(max-width: 1200px) 250px, 522px"
              className={styles.aboutSection__describe__photo__container__image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
