import React, { useMemo } from 'react';
import { addLeadingZero } from '../../../../utils/stringUtils';
import Style from './TimePicker.module.css';

interface TimePickerProps {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

const TimePicker: React.FC<TimePickerProps> = ({ selectedDate, setSelectedDate }) => {
  const setTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedDate) {
      setSelectedDate(new Date());
    }

    const date = new Date(selectedDate || new Date());
    const [hour, minute] = event.target.value.split(':');
    date.setHours(Number(hour), Number(minute));

    setSelectedDate(date);
  };

  const selectedTimeString = useMemo(
    () =>
      selectedDate
        ? `${addLeadingZero(selectedDate.getHours())}:${addLeadingZero(selectedDate.getMinutes())}`
        : '',
    [selectedDate],
  );

  console.log(selectedTimeString);

  return (
    <div className={Style.timeContainer}>
      <div className={Style.timeLabel}>שעת כניסה לתוקף</div>
      <input type='time' value={selectedTimeString} onChange={setTime} />
    </div>
  );
};

export default TimePicker;
