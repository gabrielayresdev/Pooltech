import React from "react";
import styles from "./Contact.module.sass";
import Input from "./Form_fields/Input";
import Textarea from "./Form_fields/Textarea";
import useForm from "../../hooks/useForm";

const Contact = () => {
  const { value, error, onChange, validate } = useForm("email");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {value}
        <Input
          value={value}
          handleChange={onChange}
          id="email"
          data-testid={"email"}
          onBlur={() => {
            console.log("oi");
            validate();
          }}
        />
        <span data-testid="email_error_message">{error}</span>
        <Textarea />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
