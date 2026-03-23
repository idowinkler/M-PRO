import DataStockSection from "../DataStockSection/DataStockSection";
import Modal from "../Modal/Modal";
import styles from "./OptimalPlanningModal.module.css";
import { DataStockItem } from "../../types/DataStockItem";

interface OptimalPlanningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OptimalPlanningModal: React.FC<OptimalPlanningModalProps> = ({
  isOpen,
  onClose,
}) => {
  const stocks: DataStockItem[] = [
    { id: 1, name: "מאגר הכי מושלם שיש בעולם" },
    { id: 2, name: "מאגר של מפת חום" },
    { id: 3, name: "מאגר חמורים בעזה 🫏" },
    // ... more stocks
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="יצירת מפת חום">
      <div className={styles.container}>
        <div className={styles.divider}/>
        <h4 className={styles.title}>בחירת מאגר נתונים</h4>
        <DataStockSection dataStockItems={stocks} />
      </div>
    </Modal>
  );
};

export default OptimalPlanningModal;
