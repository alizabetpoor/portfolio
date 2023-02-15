import { SocialProps } from "@/interface/components/social";
import { socialLinksAndSvg } from "@/static/components/social/social";
import styles from "./style.module.scss";

const Social = ({ isHorizontal = false }: SocialProps) => {
  return (
    <div
      className={`${
        !isHorizontal ? styles.social : styles["socialHorizontal"]
      }`}
    >
      <div
        className={`${
          !isHorizontal
            ? styles.social__links
            : styles["socialHorizontal__links"]
        }`}
      >
        {socialLinksAndSvg.map((social) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={social.link}
            key={social.id}
          >
            <social.svg transform={true} />
          </a>
        ))}
      </div>
      <div
        className={`${
          !isHorizontal ? styles.social__line : styles["socialHorizontal__line"]
        }`}
      ></div>
    </div>
  );
};

export default Social;
