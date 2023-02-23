import Label from "@/core/Label";
import { DetailProps } from "@/interface/components/workExperienceSection/detail";
import styles from "./style.module.scss";

const Detail = ({
  role,
  company,
  siteAddress,
  startDate,
  endDate,
  description,
  items,
}: DetailProps) => {
  return (
    <div className={styles.detail}>
      <div className={styles.detail__roleAndCompany}>
        <span>{role}</span>
        <a href={siteAddress}>{company}</a>
      </div>
      <div className={styles.detail__date}>
        <span>{startDate} </span>
        <span>- {endDate}</span>
      </div>
      <span className={styles.detail__description}>{description}</span>
      <ul className={styles.detail__items}>
        {items.map((item, index) => (
          <Label key={index} text={item} />
        ))}
      </ul>
      <div className={styles.detail__lightEffect}></div>
    </div>
  );
};

export default Detail;
