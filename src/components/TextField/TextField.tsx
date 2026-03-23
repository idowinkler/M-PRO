import React from "react";
import styles from "./TextField.module.css";

interface TextFieldProps {
  value: string;
  onChange: (newValue: string) => void;
  isDisabled?: boolean;
  extraClass?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  isDisabled = false,
  extraClass,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      className={`${styles.textInput} ${extraClass ?? ""}`}
      disabled={isDisabled}
    />
  );
};

export default TextField;
