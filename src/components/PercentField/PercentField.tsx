import React from "react";
import styles from "./PercentField.module.css";
import TextField from "../TextField/TextField";

interface PrecentFieldProps {
  precent: number;
  onChange: (precent: number) => void;
  isDisabled?: boolean;
}

const PrecentField: React.FC<PrecentFieldProps> = ({
  precent,
  onChange,
  isDisabled = false,
}) => {
  // temporary: what is supposed to happen in general to ensure the input is a number from 1-100
  const handleChangePrecent = (value: string) => {
    const parsedPrecent = Number(value);

    if (!isNaN(parsedPrecent)) {
      const precentInRange = Math.min(100, Math.max(0, parsedPrecent));
      onChange(precentInRange);
    }
  };

  return (
    <div className={styles.percentContainer}>
      {!isDisabled && <span className={styles.percentageSymbol}>%</span>}
      <TextField
        value={isDisabled ? "" : precent.toString()}
        onChange={handleChangePrecent}
        isDisabled={isDisabled}
        extraClass={`${isDisabled ? styles.disabledPercentInput : styles.percentInput}`}
      />
    </div>
  );
};

export default PrecentField;
