import styles from "./MainSection.module.sass";
import { Link } from "react-scroll";

const MainSection = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Limpeza e manutenção de piscinas </h1>
      <p className={styles.paragraph}>
        Sua Experiência Aquática de Excelência. Somos uma empresa dedicada à
        criação e manutenção de piscinas extraordinárias. Com anos de
        experiência e paixão pelo nosso trabalho, oferecemos serviços
        abrangentes, desde o projeto e instalação de piscinas personalizadas até
        a manutenção regular e tratamento químico especializado. Nossa equipe de
        especialistas altamente qualificados está empenhada em transformar seu
        espaço de lazer em um oásis relaxante e convidativo. Confie na Pooltech
        para fazer parte de sua jornada aquática e tornar seus momentos de
        piscina inesquecíveis
      </p>
      <Link to="contato" smooth duration={500} className={styles.button}>
        Vamos trabalhar jutos
      </Link>
    </main>
  );
};

export default MainSection;
