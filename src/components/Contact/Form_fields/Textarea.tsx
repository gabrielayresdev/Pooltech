import React from "react";
import styles from "./Input.module.sass";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  className?: string;
  value: string;
  error?: string | null;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Textarea = ({
  label,
  type,
  className,
  value,
  handleChange,
  id,
  error,
  ...rest
}: IInput) => {
  return (
    <div className={styles.input_container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        type={type ? type : "text"}
        className={`${styles.input} ${className}`}
        value={value}
        id={id}
        onChange={handleChange}
        {...rest}
      ></textarea>
      <span data-testid={`${id}_error_message`} className={styles.error}>
        {error}
      </span>
    </div>
  );
};

export default Textarea;
