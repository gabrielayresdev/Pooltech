import React from "react";

type formType = "email" | "number" | "notNull" | null;
interface Rules {
  [key: string]: {
    validation: (
      value: string,
      setError: React.Dispatch<React.SetStateAction<string | null>>
    ) => boolean;
  };
}

const rules: Rules = {
  email: {
    validation: (value, setError) => {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (value.length === 0) {
        setError("Preencha o campo");
        return false;
      } else if (!regex.test(value)) {
        setError("E-mail inválido");
        return false;
      } else {
        setError(null);
        return true;
      }
    },
  },
  number: {
    validation: (value, setError) => {
      const regex =
        /^(?:\+?55\s?)?(?:(?:\(\d{2}\)|\d{2})(?:\s?|-)?)(?:\d{5}(?:-|\s?)\d{4}|\d{10})$/g;
      if (value.length === 0) {
        setError("Preencha o campo");
        return false;
      } else if (!regex.test(value)) {
        setError("Número inválido");
        return false;
      } else {
        setError(null);
        return true;
      }
    },
  },
  notNull: {
    validation: (value, setError) => {
      if (value.length === 0) {
        console.log(value.length);
        setError("Preencha o campo");
        return false;
      }
      setError(null);
      return true;
    },
  },
};

const useForm = (type: formType) => {
  const [value, setValue] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);

  const validate = () => {
    if (type) {
      return rules[type].validation(value, setError);
    } else return true;
  };

  const onChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (error) validate();
    setValue(target.value);
  };

  return { value, setValue, error, onChange, validate: () => validate() };
};

export default useForm;
