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
        {siteAddress ? (
          <a rel="noreferrer noopener" target="_blank" href={siteAddress}>
            {company}
          </a>
        ) : (
          <span>{company}</span>
        )}
      </div>
      {(startDate || endDate) && (
        <p className={styles.detail__date}>
          {startDate && endDate ? `${startDate} – ${endDate}` : startDate || endDate}
        </p>
      )}
      <p className={styles.detail__description}>{description}</p>
      <ul className={styles.detail__items}>
        {items.map((item, index) => (
          <li key={typeof item === "string" ? item : `${item.href}-${index}`}>
            {typeof item === "string" ? item : (
              <>
                {item.before}
                <a href={item.href} target="_blank" rel="noreferrer noopener">
                  {item.label}
                </a>
                {item.after}
              </>
            )}
          </li>
        ))}
      </ul>
      <div className={styles.detail__lightEffect}></div>
    </div>
  );
};

export default Detail;
