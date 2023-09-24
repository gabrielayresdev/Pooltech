import styles from "./Header.module.sass";
import Logo from "../../assets/logo_sph_piscinas.png";
import React from "react";

const Header = () => {
  const [visible, setVisible] = React.useState<boolean>();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} /> SPH Piscinas
      </div>
      <div className={styles.openMenu} onClick={() => setVisible(!visible)}>
        x
      </div>
      <nav className={visible ? styles.active : ""}>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#depoimentos" className={styles.active}>
          Depoimentos
        </a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
};

export default Header;
