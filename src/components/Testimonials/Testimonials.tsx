import styles from "./Testimonials.module.sass";
import Wave from "../Wave/Wave";
import Testimonial from "../Testimonial/Testimonial";
import Profile1 from "../../assets/profile1.png";
import Profile2 from "../../assets/profile2.png";
import Profile3 from "../../assets/profile3.jpg";

const Testimonials = () => {
  return (
    <div className={styles.testimonials} id="depoimentos">
      <div className={styles.testimonials_text}>
        <h2 className={styles.title}>Depoimentos</h2>
        <p className={styles.paragraph}>
          Veja o que nossos clientes estão falando sobre nosso serviço
        </p>
      </div>
      <div className={styles.testimonials_cards}>
        <div className={styles.cards_row}>
          <Testimonial
            image={Profile1}
            name="Suelen Sgorla"
            text={`A PoolTech é a empresa ideal para a manutenção de piscinas! O serviço deles é excepcional, e minha piscina nunca esteve tão bonita. A equipe é confiável, bem informada e sempre se esforça ao máximo para garantir que tudo esteja em perfeitas condições. Eu valorizo sua consistência e profissionalismo, tornando o cuidado com a piscina sem complicações. Se você deseja uma piscina limpa e sem preocupações, eu recomendo muito a PoolTech. Eles superaram minhas expectativas, e estou extremamente satisfeito com o serviço deles!`}
          />
          <Testimonial
            image={Profile2}
            name="Andressa Lisboa"
            text={`Agradeço à Pooltech pela eficiente limpeza do filtro da minha piscina. O serviço foi rápido e eficaz, deixando meu sistema de filtragem em perfeitas condições. Agora, a água da minha piscina está mais clara e saudável do que nunca. Fiquei impressionado com a competência da equipe da Pooltech, que realizou o trabalho de forma rápida e profissional. Recomendo seus serviços de limpeza de filtro a todos os proprietários de piscinas que desejam manter a qualidade da água`}
          />
          <Testimonial
            image={Profile3}
            name="Gustavo Marques"
            text={`Contratei a Pooltech para a troca de azulejos da minha piscina e fiquei extremamente satisfeito. A equipe demonstrou grande expertise, garantindo uma substituição impecável dos azulejos e o eficiente conserto dos equipamentos. Minha piscina agora parece nova, e todos os sistemas funcionam perfeitamente. O serviço foi concluído dentro do prazo prometido. Recomendo a Pooltech para qualquer projeto de manutenção de piscina. São confiáveis, profissionais e entregam resultados excepcionais.`}
          />
        </div>
      </div>
      <Wave className={styles.detail} color="#fff" />
    </div>
  );
};

export default Testimonials;
