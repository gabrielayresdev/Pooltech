import React from "react";

type formType = "email" | "number" | "notNull" | undefined;
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
      setError("Existe um erro");
      return false;
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
