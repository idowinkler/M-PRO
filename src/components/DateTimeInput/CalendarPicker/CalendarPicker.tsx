import React, { useState } from 'react';
import DayPicker from './DayPicker/DayPicker';
import TimePicker from './TimePicker/TimePicker';
import Style from './CalendarPicker.module.css';

interface CalendarPickerProps {
  onSave: (date: Date) => void;
  onCancel: () => void;
  initialValue?: Date;
}

const CalendarPicker: React.FC<CalendarPickerProps> = ({ initialValue, onSave, onCancel }) => {
  const initialDate = initialValue || new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate);

  const save = () => {
    if (selectedDate) {
      onSave(selectedDate);
    }
  };

  return (
    <div className={Style.popup}>
      <DayPicker
        initialDate={initialDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <TimePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {/* //TODO: use our action buttons */}
      <div className={Style.popupActions}>
        <button className={Style.cancelButton} onClick={onCancel}>
          ביטול
        </button>
        <button className={Style.saveButton} onClick={save}>
          שמירה
        </button>
      </div>
    </div>
  );
};

export default CalendarPicker;
