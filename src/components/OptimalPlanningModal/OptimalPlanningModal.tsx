import Modal from "../Modal/Modal";
import styles from "./OptimalPlanningModal.module.css";

interface OptimalPlanningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OptimalPlanningModal: React.FC<OptimalPlanningModalProps> = ({ isOpen, onClose }) => {
    return (
        <Modal 
            isOpen={isOpen}
            onClose={onClose}
            title="יצירת מפת חום"
        >
            <div className={styles.container}/>
        </Modal>
    )
}

export default OptimalPlanningModal;