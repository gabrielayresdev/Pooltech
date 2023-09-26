import React from "react";
import styles from "./Contact.module.sass";
import Input from "./Form_fields/Input";
import Textarea from "./Form_fields/Textarea";
import useForm from "../../hooks/useForm";

const Contact = () => {
  const { value: name, onChange: changeName } = useForm("email");
  const {
    value: number,
    error: numberError,
    onChange: changeNumber,
    validate: validateNumber,
  } = useForm("email");
  const {
    value: email,
    error: emailError,
    onChange: changeEmail,
    validate: validateEmail,
  } = useForm("email");
  const { value: message, onChange: changeMessage } = useForm(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <div className={styles.contact}>
      <h2 className={styles.title}>Contato</h2>
      <p className={styles.paragraph}>Entre em contato conosco</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="Nome"
          value={name}
          id="name"
          handleChange={changeName}
          data-testid="name"
        />
        <Input
          label="Whatsapp"
          value={number}
          handleChange={changeNumber}
          data-testid={"number"}
          onBlur={() => {
            validateNumber();
          }}
          id="number"
          error={numberError}
          columns="1"
        />
        <Input
          label="email"
          value={email}
          handleChange={changeEmail}
          data-testid={"email"}
          onBlur={() => {
            validateEmail();
          }}
          id="email"
          error={emailError}
          columns="1"
        />
        <Textarea
          label="mensagem"
          value={message}
          id="message"
          handleChange={changeMessage}
          data-testid="message"
        />
        <button className={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
