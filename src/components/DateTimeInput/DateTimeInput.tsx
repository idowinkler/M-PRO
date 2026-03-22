import { useState } from 'react';
import calenderIcon from '../../assets/calender.svg';
import Styles from './DateTimeInput.module.css';
import InputLabel from '../InputLabel/InputLabel';
import CalendarPicker from './CalendarPicker/CalendarPicker';
import { addLeadingZero } from '../../utils/stringUtils';

interface DateTimeInputProps {
  label?: string;
  date?: Date;
  onChange?: (date?: Date) => void;
}

const DateTimeInput: React.FC<DateTimeInputProps> = ({ label, date: value, onChange }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onClick = () => {
    setShowDatePicker(true);
  };

  const handleSave = (date: Date) => {
    onChange?.(date);
    setShowDatePicker(false);
  };

  const handleCancel = () => {
    setShowDatePicker(false);
  };

  const formatDateDisplay = (date?: Date) => {
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
    } catch (formattingError) {
      //TODO: use our error handling
      console.log('Error formatting date:', formattingError);
      return '';
    }
  };

  //TODO: use our onClickOutside hook if needed

  return (
    <div className={Styles.wrapper}>
      {label && <InputLabel label={label} />}
      <div className={Styles.inputContainer} onClick={onClick}>
        <img src={calenderIcon} />
        <div className={Styles.formattedText}>{formatDateDisplay(value)}</div>
      </div>
      {showDatePicker && (
        <CalendarPicker initialValue={value} onSave={handleSave} onCancel={handleCancel} />
      )}
    </div>
  );
};

export default DateTimeInput;
