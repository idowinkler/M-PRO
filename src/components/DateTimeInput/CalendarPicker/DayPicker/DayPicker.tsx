import React, { useMemo, useState } from 'react';
import Style from './DayPicker.module.css';

interface DayPickerProps {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  initialDate: Date;
}

const HEB_DAY_LETTERS = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'];

const DayPicker: React.FC<DayPickerProps> = ({ initialDate, selectedDate, setSelectedDate }) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(initialDate);

  const startOfMonth = useMemo(
    () => new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1),
    [currentMonth],
  );
  const endOfMonth = useMemo(
    () => new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0),
    [currentMonth],
  );
  const hebrewMonth = useMemo(
    () => currentMonth.toLocaleString('he-IL', { month: 'long', year: 'numeric' }),
    [currentMonth],
  );

  const daysArray = React.useMemo(() => {
    return Array.from({ length: endOfMonth.getDate() }, (_, i) => i + 1);
  }, [endOfMonth]);

  const getPrevMonth = () =>
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const getNextMonth = () =>
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  const selectDay = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    date.setHours(
      selectedDate.getHours(),
      selectedDate.getMinutes(),
      selectedDate.getSeconds(),
      selectedDate.getMilliseconds(),
    );

    setSelectedDate(date);
  };

  const isDaySelected = (day: number) => {
    return (
      selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const renderLeadingEmptyDays = () => {
    const emptyDaysCount = startOfMonth.getDay();

    return Array.from({ length: emptyDaysCount }).map((_, index) => (
      <span key={`empty-${index}`} className={Style.dayEmpty} />
    ));
  };

  return (
    <>
      <div className={Style.popupHeader}>
        <button onClick={getPrevMonth} className={Style.navButton}>
          &lt;
        </button>
        <span className={Style.popupTitle}>{hebrewMonth}</span>
        <button onClick={getNextMonth} className={Style.navButton}>
          &gt;
        </button>
      </div>
      <div className={Style.weekdays}>
        {HEB_DAY_LETTERS.map((weekdayLetter) => (
          <span key={weekdayLetter}>{weekdayLetter}</span>
        ))}
      </div>
      <div className={Style.daysGrid}>
        {renderLeadingEmptyDays()}
        {daysArray.map((day) => (
          <span
            key={day}
            className={`${Style.day} ${isDaySelected(day) ? Style.daySelected : ''}`}
            onClick={() => selectDay(day)}
          >
            {day}
          </span>
        ))}
      </div>
    </>
  );
};

export default DayPicker;
