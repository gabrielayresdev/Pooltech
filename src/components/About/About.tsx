import React from "react";
import styles from "./About.module.sass";

import Pic1 from "../../assets/Foto 1.png";
import Pic2 from "../../assets/Foto 2.png";
import Wave from "../UI/Wave";

const About = () => {
  return (
    <div className={styles.about} id="sobre">
      <Wave color="#fff" className={styles.detail} />
      <div className={styles.container}>
        <div className={styles.images}>
          <div className={`${styles.pictureContainer} ${styles.first}`}>
            <img src={Pic1} />
          </div>
          <div className={styles.pictureContainer}>
            <img src={Pic2} />
          </div>
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>Sobre</h2>
          <p className={styles.paragraph}>
            A Pooltech é uma renomada empresa de manutenção de piscinas que tem
            se destacado no mercado por muitos anos. Com um firme compromisso
            com a excelência e a satisfação do cliente, a Pooltech se tornou uma
            referência na indústria de manutenção de piscinas.
          </p>
          <p className={styles.paragraph}>
            A empresa tem uma longa história de sucesso e crescimento contínuo.
            Seu sucesso é atribuído à dedicação da equipe em fornecer serviços
            de alta qualidade e à busca constante pela satisfação do cliente. A
            Pooltech entende que uma piscina limpa e bem mantida é um ativo
            valioso para qualquer propriedade, e é por isso que eles se esforçam
            para oferecer os melhores serviços de manutenção.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
