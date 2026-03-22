import styles from "./DataStockListItem.module.css";
import React, { useState } from "react";
import { DataStockItem } from "../../types/DataStockItem";
import settingsIcon from "../../assets/settingsIcon.svg";

interface DataStockListItemProps {
  item: DataStockItem;
}

const DataStockListItem: React.FC<DataStockListItemProps> = ({ item }) => {
  const [precent, setPrecent] = useState("0");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.stockItem}>
      <div className={styles.rightSide}>
        <input
          type="checkbox"
          checked={isChecked}
          className={styles.checkbox}
          aria-label={`Toggle ${item.name}`}
          onChange={() => {
            setIsChecked((prev) => !prev);
          }}
        />
        <p className={styles.stockLabel}>{item.name}</p>
      </div>
      <div className={styles.leftSide}>
        <button
          className={styles.settingsIcon}
        >
          <img src={settingsIcon}></img>
        </button>

        <div className={styles.percentContainer}>
          {isChecked && <span className={styles.percentageSymbol}>%</span>}
          <input
            type="text"
            value={isChecked ? precent : ""}
            onChange={(event) => {
              setPrecent(event.target.value);
            }}
            className={styles.percentageInput}
            disabled={!isChecked}
          /> 
        </div>
      </div>
    </div>
  );
};

export default DataStockListItem;
