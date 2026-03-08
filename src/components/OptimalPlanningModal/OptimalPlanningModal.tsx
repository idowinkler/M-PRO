import { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './OptimalPlanningModal.module.css';
import DateTimeInput from '../DateTimeInput/DateTimeInput';

interface OptimalPlanningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OptimalPlanningModal: React.FC<OptimalPlanningModalProps> = ({ isOpen, onClose }) => {
  const [heatMapName, setHeatMapName] = useState('');
  const [timeWindowStart, setTimeWindowStart] = useState<Date | undefined>(undefined);
  const [timeWindowEnd, setTimeWindowEnd] = useState<Date | undefined>(undefined);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='יצירת מפת חום'>
      <div className={styles.container}>
        <input
          className={styles.input}
          type='text'
          placeholder='שם מפת החום'
          dir='rtl'
          value={heatMapName}
          onChange={(event) => setHeatMapName(event.target.value)}
        />
        <div className={styles.section}>
          <div className={styles.divider} />
          <h4 className={styles.sectionTitle}>חלון זמן לסריקת נתונים</h4>
          <div className={styles.dateInputs}>
            <DateTimeInput label='מ' date={timeWindowStart} onChange={setTimeWindowStart} />
            <DateTimeInput label='עד' date={timeWindowEnd} onChange={setTimeWindowEnd} />
          </div>
          <div className={styles.divider} />
        </div>
      </div>
    </Modal>
  );
};

export default OptimalPlanningModal;
