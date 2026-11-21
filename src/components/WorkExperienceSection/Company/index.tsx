import type { KeyboardEvent } from "react";
import type { CompanyProps } from "@/interface/components/workExperienceSection/company";
import { workExperienceData } from "@/static/components/workExperienceSection/workExperienceData";
import styles from "./style.module.scss";

const Company = ({
  activeCompanyIndex,
  handleCompanyIndexChange,
}: CompanyProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = workExperienceData.length - 1;
    const nextIndex =
      event.key === "ArrowRight" ? (index + 1) % workExperienceData.length
        : event.key === "ArrowLeft" ? (index - 1 + workExperienceData.length) % workExperienceData.length
        : event.key === "Home" ? 0
        : event.key === "End" ? lastIndex
        : index;
    if (nextIndex === index) return;
    event.preventDefault();
    handleCompanyIndexChange(nextIndex);
    document.getElementById(`experience-tab-${nextIndex}`)?.focus();
  };

  return (
    <div className={styles.company} role="tablist" aria-label="Work experience">
      {workExperienceData.map((workData, index) => (
        <button
          type="button"
          role="tab"
          id={`experience-tab-${index}`}
          aria-controls="experience-panel"
          tabIndex={activeCompanyIndex === index ? 0 : -1}
          onKeyDown={(event) => handleKeyDown(event, index)}
          aria-selected={activeCompanyIndex === index}
          onClick={() => handleCompanyIndexChange(index)}
          className={`${styles.company__item} ${
            activeCompanyIndex === index ? styles.company__active : ""
          }`}
          key={index}
        >
          <span>{workData.company}</span>
        </button>
      ))}
    </div>
  );
};

export default Company;
