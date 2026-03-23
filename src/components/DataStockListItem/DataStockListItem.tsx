import styles from "./DataStockListItem.module.css";
import React, { useState } from "react";
import { DataStockItem } from "../../types/DataStockItem";
import settingsIcon from "../../assets/settingsIcon.svg";
import PrecentField from "../PercentField/PercentField";

interface DataStockListItemProps {
  item: DataStockItem;
}

const DataStockListItem: React.FC<DataStockListItemProps> = ({ item }) => {
  // temoprary states, in future component will get data as a prop from the heatmap settings object or smth
  const [precent, setPrecent] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.stockItem}>
      <div className={styles.rightSide}>
        {/* use existing checkbox component */}
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
        <button className={styles.settingsIcon}>
          <img src={settingsIcon}></img>
        </button>

        <PrecentField
          precent={precent}
          onChange={(precent) => setPrecent(precent)}
          isDisabled={!isChecked}
        />
      </div>
    </div>
  );
};

export default DataStockListItem;
