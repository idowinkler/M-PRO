
import DataStockSection from "../DataStockSection/DataStockSection";
import Modal from "../Modal/Modal";
import styles from "./OptimalPlanningModal.module.css";
import { DataStockItem } from "../../types/DataStockItem";

interface OptimalPlanningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OptimalPlanningModal: React.FC<OptimalPlanningModalProps> = ({ isOpen, onClose }) => {
    const stocks: DataStockItem[] = [
    { id: '1', name: 'מניה בעלת שווי ש"ח 1', },
    { id: '2', name: 'מניה בעלת שווי ש"ח 2', },
    { id: '3', name: 'מניה בעלת שווי ש"ח 3', },
    // ... more stocks
  ];
  
    return (
        <Modal 
            isOpen={isOpen}
            onClose={onClose}
            title="יצירת מפת חום"
        >
            <div className={styles.container}>
                <DataStockSection dataStockItems={stocks}/>
            </div>
        </Modal>
    )
}

export default OptimalPlanningModal;