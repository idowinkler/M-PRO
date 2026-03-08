import React, { useRef } from 'react';
import styles from './DateTimeInput.module.css';
import calenderIcon from '../../assets/calender.svg';

interface DateTimeInputProps {
  label?: string;
  date?: Date;
  onChange?: (date?: Date) => void;
}

const DateTimeInput: React.FC<DateTimeInputProps> = ({ label, date: value, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    inputRef.current?.showPicker();
  };

  const addLeadingZero = (n: number) => n.toString().padStart(2, '0');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const date = value ? new Date(value) : undefined;
    onChange?.(date);
  };

  const formatDisplayValue = (date?: Date) => {
    if (!date) {
      return 'hh:mm ב dd/mm/yyyy';
    }

    try {
      const day = addLeadingZero(date.getDate());
      const month = addLeadingZero(date.getMonth() + 1);
      const year = date.getFullYear();
      const hours = addLeadingZero(date.getHours());
      const minutes = addLeadingZero(date.getMinutes());

      return `${day}/${month}/${year} ב ${hours}:${minutes}`;
    } catch (e) {
      console.log('Error formatting date:', e);

      return '';
    }
  };

  return (
    <div className={styles.wrapper}>
      {label && (
        <div className={styles.labelWrapper}>
          <span className={styles.labelText}>{label}</span>
        </div>
      )}

      <div className={styles.inputContainer} onClick={handleContainerClick}>
        <img src={calenderIcon} className={styles.calendarIcon} />
        <div className={styles.formattedText}>{formatDisplayValue(value)}</div>
        <input
          ref={inputRef}
          type='datetime-local'
          className={styles.hiddenInput}
          value={value ? value.toISOString().slice(0, 16) : ''}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default DateTimeInput;
