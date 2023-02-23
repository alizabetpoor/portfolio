import { useState } from "react";
import Title from "@/components/Title";
import Company from "@/components/WorkExperienceSection/Company";
import Detail from "@/components/WorkExperienceSection/Detail";
import Box from "@/core/Box";
import { workExperienceData } from "@/static/components/workExperienceSection/workExperienceData";
import styles from "./style.module.scss";

const WorkExperienceSection = () => {
  const [activeCompanyIndex, setActiveCompanyIndex] = useState<number>(0);

  const handleCompanyIndexChange = (index: number) => {
    if (index !== activeCompanyIndex) setActiveCompanyIndex(index);
  };

  return (
    <div className={styles.workExperience}>
      <Title id="experience" haveBlur text="Experience" number={2} />
      <div className={styles.workExperience__detail}>
        <Company
          activeCompanyIndex={activeCompanyIndex}
          handleCompanyIndexChange={handleCompanyIndexChange}
        />
        <Box className={styles.workExperience__detail__box}>
          <Detail
            company={workExperienceData[activeCompanyIndex].company}
            siteAddress={workExperienceData[activeCompanyIndex].siteAddress}
            startDate={workExperienceData[activeCompanyIndex].startDate}
            endDate={workExperienceData[activeCompanyIndex].endDate}
            role={workExperienceData[activeCompanyIndex].role}
            description={workExperienceData[activeCompanyIndex].description}
            items={workExperienceData[activeCompanyIndex].items}
          />
        </Box>
        <div className={styles.workExperience__detail__lightEffect}></div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
