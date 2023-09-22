import styles from "./MainSection.module.sass";
import BannerImg from "../../assets/banner.png";
import Wave from "../UI/Wave";

const MainSection = () => {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <img src={BannerImg} />
      </div>
      <h1 className={styles.title}>Limpeza e manutenção de piscinas </h1>
      <p className={styles.paragraph}>
        Sua Experiência Aquática de Excelência. Somos uma empresa dedicada à
        criação e manutenção de piscinas extraordinárias. Com anos de
        experiência e paixão pelo nosso trabalho, oferecemos serviços
        abrangentes, desde o projeto e instalação de piscinas personalizadas até
        a manutenção regular e tratamento químico especializado. Nossa equipe de
        especialistas altamente qualificados está empenhada em transformar seu
        espaço de lazer em um oásis relaxante e convidativo. Confie na SPH
        Piscinas para fazer parte de sua jornada aquática e tornar seus momentos
        de piscina inesquecíveis
      </p>
      <a className={styles.button}>Vamos trabalhar jutos</a>

      <Wave className={styles.detail} />
    </main>
  );
};

export default MainSection;
