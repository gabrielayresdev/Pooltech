import React from "react";
import styles from "./Testimonials.module.sass";
import Wave from "../UI/Wave";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonials_text}>
        <h2 className={styles.title}>Depoimentos</h2>
        <p className={styles.paragraph}>
          Veja o que nossos clientes estão falando sobre nosso serviço
        </p>
      </div>
      <div className={styles.testimonials_cards}>
        <div className={styles.cards_row}>
          <Testimonial
            name="Suelen Sgorla"
            text={`Após pesquisar muito, encontrei a empresa do Sr. Jorge. Fiquei muito empolgada com os comentários e logo entrei em contato com ele. Dois dias depois ele foi em minha residência, pontual, foi super solícito, educadíssimo, tirou todas minhas dúvidas, avaliou minha piscina e fez meu orçamento rapidamente. Gostei do cuidado que teve em me explicar tudo que seria necessário fazer, dando as opções de custo e tudo mais. Empresa séria e indico para todos, sem dúvidas. Obrigada.`}
          />
          <Testimonial
            name="Suelen Sgorla"
            text={`Após pesquisar muito, encontrei a empresa do Sr. Jorge. Fiquei muito empolgada com os comentários e logo entrei em contato com ele. Dois dias depois ele foi em minha residência, pontual, foi super solícito, educadíssimo, tirou todas minhas dúvidas, avaliou minha piscina e fez meu orçamento rapidamente. Gostei do cuidado que teve em me explicar tudo que seria necessário fazer, dando as opções de custo e tudo mais. Empresa séria e indico para todos, sem dúvidas. Obrigada.`}
          />
          <Testimonial
            name="Suelen Sgorla"
            text={`Após pesquisar muito, encontrei a empresa do Sr. Jorge. Fiquei muito empolgada com os comentários e logo entrei em contato com ele. Dois dias depois ele foi em minha residência, pontual, foi super solícito, educadíssimo, tirou todas minhas dúvidas, avaliou minha piscina e fez meu orçamento rapidamente. Gostei do cuidado que teve em me explicar tudo que seria necessário fazer, dando as opções de custo e tudo mais. Empresa séria e indico para todos, sem dúvidas. Obrigada.`}
          />
        </div>
      </div>
      <Wave className={styles.detail} color="#fff" />
    </div>
  );
};

export default Testimonials;
