import React from "react";
import styles from "./Input.module.sass";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  className?: string;
  columns?: string;
  value: string;
  error?: string | null;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Input = ({
  label,
  type,
  className,
  value,
  handleChange,
  id,
  error,
  columns,
  ...rest
}: IInput) => {
  return (
    <div
      className={styles.input_container}
      style={columns ? { gridColumn: `span ${columns}` } : {}}
    >
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type ? type : "text"}
        className={`${styles.input} ${className}`}
        value={value}
        id={id}
        onChange={handleChange}
        {...rest}
      ></input>
      {error && (
        <span
          className={styles.error}
          role="alert"
          data-testid={`${id}-error-message`}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
