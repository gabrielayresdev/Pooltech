import styles from "./Footer.module.sass";
import { Link } from "react-scroll";
import Logo from "../../assets/Logo.png";
import Whatsapp from "../../assets/whatsapp.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={Logo} />
        </div>
        <nav className={styles.nav}>
          {["sobre", "serviços", "depoimentos", "contato"].map((item) => {
            // ! Criar função para remover caracteres especiais
            return (
              <Link
                key={item}
                to={`${item.replace(/[ç]/g, "c").toLowerCase()}`}
                smooth
                duration={500}
                offset={-100}
              >
                {item}
              </Link>
            );
          })}
        </nav>
        <div className={styles.socialNetworks}>
          <img src={Whatsapp} alt="" />
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
          <img src={Linkedin} alt="" />
        </div>
      </div>
      <span className={styles.divisor} />
    </footer>
  );
};

export default Footer;
