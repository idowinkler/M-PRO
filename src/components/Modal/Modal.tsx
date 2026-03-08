import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, icon }) => {
  return (
    <div className={`${styles.modalBackdrop} ${isOpen && styles.open}`} onClick={onClose}>
      <div
        className={`${styles.modalContent} ${isOpen && styles.open}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <h2 className={styles.title}>{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
