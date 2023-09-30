import styles from "./Header.module.sass";
import Logo from "../../assets/logo.svg";
import React from "react";
import Burger from "../../assets/icons8-cardápio.svg";
import { Link } from "react-scroll";

const Header = () => {
  const [visible, setVisible] = React.useState<boolean>();
  const headerRef = React.useRef<HTMLHeadElement>(null);

  React.useEffect(() => {
    function handleMenu(event: Event) {
      if (event.target && !headerRef.current?.contains(event.target as Node)) {
        setVisible(false);
      }
    }

    const events = ["click", "scroll"];
    events.forEach((e) => {
      document.addEventListener(e, handleMenu);
    });

    return () => {
      document.removeEventListener("click", handleMenu);
    };
  }, [visible]);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.logo}>
        <img src={Logo} />
      </div>
      <div
        className={styles.menu_controller}
        onClick={() => setVisible(!visible)}
      >
        <img src={Burger} alt="" />
      </div>
      <nav className={visible ? styles.active : ""}>
        {["sobre", "serviços", "depoimentos", "contato"].map((item) => {
          // ! Criar função para remover caracteres especiais
          return (
            <Link
              key={item}
              to={`${item.replace(/[ç]/g, "c").toLowerCase()}`}
              smooth
              duration={500}
            >
              {item}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
