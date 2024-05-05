import styles from "./Services.module.sass";
import Service from "../Service/Service";

import TilesIcon from "../../assets/tiles.svg";
import CleanIcon from "../../assets/clean.svg";
import FilterIcon from "../../assets/filter.svg";
import GearIcon from "../../assets/gear.svg";
import ChemicalIcon from "../../assets/chemical.svg";
import TimeIcon from "../../assets/time.svg";
import Wave from "../Wave/Wave";

const Services = () => {
  return (
    <div className={styles.services} id="servicos">
      <Wave className={styles.detail} color="#2991D6" />
      <div className={styles.services_text}>
        <h2 className={styles.title}>Nossos serviços</h2>
        <p className={styles.paragraph}>
          Anim labore voluptate aute elit aliqua qui aliquip eu elit do.
        </p>
      </div>
      <div className={styles.services_cards}>
        <div className={styles.services_container}>
          <Service
            icon={TilesIcon}
            title="Troca de azulejo"
            paragraph="Renove sua piscina com nossa troca de azulejos profissional, garantindo beleza e durabilidade. Transforme sua área de lazer hoje!"
          />
          <Service
            icon={CleanIcon}
            title="Limpeza de piscina"
            paragraph="Mantenha sua piscina impecável com nosso serviço de limpeza. Água cristalina e diversão garantida para sua família!"
          />
          <Service
            icon={FilterIcon}
            title="Limpeza de filtro"
            paragraph="Melhore a qualidade da água da sua piscina com nossa limpeza de filtro especializada. Água mais limpa, diversão sem preocupações!"
          />
          <Service
            icon={GearIcon}
            title="Conserto de equipamentos"
            paragraph="Recupere a funcionalidade da sua piscina com nosso serviço de conserto de equipamentos. De bombas a filtros, nós cuidamos de tudo para você."
          />
          <Service
            icon={ChemicalIcon}
            title="Tratamento químico da água"
            paragraph="Nosso tratamento químico da água é a chave para águas cristalinas e saudáveis na sua piscina. Equilibramos pH, cloro e produtos químicos com expertise, garantindo a segurança e qualidade da água."
          />
          <Service
            icon={TimeIcon}
            title="Inspeções regulares"
            paragraph="Com nossas inspeções regulares, sua piscina estará sempre em ótimo estado, proporcionando diversão com tranquilidade."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
