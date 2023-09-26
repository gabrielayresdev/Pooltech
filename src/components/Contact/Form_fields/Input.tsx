import React from "react";
import styles from "./Input.module.sass";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  className?: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Input = ({ type, className, value, handleChange, ...rest }: IInput) => {
  return (
    <input
      type={type ? type : "text"}
      className={`${styles.input} ${className}`}
      value={value}
      onChange={handleChange}
      {...rest}
    ></input>
  );
};

export default Input;
