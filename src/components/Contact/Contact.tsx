import React from "react";
import styles from "./Contact.module.sass";
import Input from "./Form_fields/Input";
import Textarea from "./Form_fields/Textarea";
import useForm from "../../hooks/useForm";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    value: name,
    setValue: setName,
    error: nameError,
    onChange: changeName,
    validate: validateName,
  } = useForm("notNull");
  const {
    value: number,
    setValue: setNumber,
    error: numberError,
    onChange: changeNumber,
    validate: validateNumber,
  } = useForm("number");
  const {
    value: email,
    setValue: setEmail,
    error: emailError,
    onChange: changeEmail,
    validate: validateEmail,
  } = useForm("email");
  const {
    value: message,
    setValue: setMessage,
    onChange: changeMessage,
  } = useForm(null);

  const formRef = React.useRef<HTMLFormElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      validateName() &&
      validateNumber() &&
      validateEmail() &&
      formRef.current
    ) {
      if (buttonRef.current !== null && buttonRef.current !== undefined)
        buttonRef.current.disabled = true;
      emailjs
        .sendForm(
          "service_3rs4zko",
          "template_r7hh5sj",
          formRef.current,
          "OQgsMMeFDCVxaSIwJ"
        )
        .then(
          (result) => {
            if (buttonRef.current !== null && buttonRef.current !== undefined)
              buttonRef.current.disabled = false;

            setName("");
            setNumber("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  React.useEffect(() => {
    if (buttonRef.current !== null && buttonRef.current !== undefined) {
      if (nameError || numberError || emailError)
        buttonRef.current.disabled = true;
      else buttonRef.current.disabled = false;
    }
  }, [nameError, numberError, emailError]);
  return (
    <div className={styles.contact}>
      <h2 className={styles.title}>Contato</h2>
      <p className={styles.paragraph}>Entre em contato conosco</p>
      <form onSubmit={handleSubmit} className={styles.form} ref={formRef}>
        <Input
          label="Nome"
          value={name}
          id="name"
          handleChange={changeName}
          data-testid="name"
          onBlur={() => validateName()}
          error={nameError}
          name="from_name"
        />
        <Input
          label="Whatsapp"
          value={number}
          handleChange={changeNumber}
          data-testid={"number"}
          onBlur={() => validateNumber()}
          id="number"
          error={numberError}
          columns="1"
          type="tel"
          name="from_number"
        />
        <Input
          label="email"
          value={email}
          handleChange={changeEmail}
          data-testid={"email"}
          onBlur={() => validateEmail()}
          id="email"
          error={emailError}
          columns="1"
          name="from_email"
        />
        <Textarea
          label="mensagem"
          value={message}
          id="message"
          handleChange={changeMessage}
          data-testid="message"
          name="message"
        />
        <button className={styles.button} ref={buttonRef}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
