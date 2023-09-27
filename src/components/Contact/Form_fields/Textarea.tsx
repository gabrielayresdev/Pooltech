import React from "react";
import styles from "./Input.module.sass";

interface ITextarea extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
  value: string;
  error?: string | null;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Textarea = ({
  label,
  className,
  value,
  handleChange,
  id,
  error,
  ...rest
}: ITextarea) => {
  return (
    <div className={styles.input_container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
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
