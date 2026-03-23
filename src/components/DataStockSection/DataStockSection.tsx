import React from "react";
import { DataStockItem } from "../../types/DataStockItem";
import DataStockListItem from "../DataStockListItem/DataStockListItem";
import styles from "./DataStockSection.module.css";


interface DataStockSectionProps {
  dataStockItems: DataStockItem[];
}

const DataStockSection: React.FC<DataStockSectionProps> = ({ dataStockItems }) => {
  return (
    <div className={styles.dataStocksContainer}>
      {dataStockItems.map((item) => (
        <DataStockListItem key={item.id} item={item} />
      ))}
    </div>
  );
};


export default DataStockSection;
