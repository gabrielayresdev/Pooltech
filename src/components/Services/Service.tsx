import React from "react";
import styles from "./Service.module.sass";

interface IService {
  icon: string;
  title: string;
  paragraph: string;
}

const Service = ({ icon, title, paragraph }: IService) => {
  return (
    <div className={styles.service} id="servicos">
      <img src={icon} alt="" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  );
};

export default Service;
