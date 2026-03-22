import React from 'react';
import styles from './InputLabel.module.css';

interface DateTimeInputProps {
  label: string;
}

//TODO: use our component if there is one, from the feature card
const InputLabel: React.FC<DateTimeInputProps> = ({ label }) => {
  return (
    <div className={styles.labelWrapper}>
      <span className={styles.labelText}>{label}</span>
    </div>
  );
};

export default InputLabel;
