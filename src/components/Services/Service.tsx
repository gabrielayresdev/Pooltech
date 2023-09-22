import React from "react";
import styles from "./Service.module.sass";

interface IService {
  icon: string;
  title: string;
  paragraph: string;
}

const Service = ({ icon, title, paragraph }: IService) => {
  return (
    <span className={styles.service_container}>
      <div className={styles.service}>
        <div className={styles.service_content}>
          <img src={icon} alt="" />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.paragraph}>{paragraph}</p>
        </div>
      </div>
    </span>
  );
};

export default Service;
