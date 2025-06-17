import React from "react";
import Style from "./MapStateBar.module.css";
import { MapStateEntity } from "../../types/MapStateEntity";
import exitIcon from "../../assets/exit.svg";

export interface MapStateBarProps {
  mapState: MapStateEntity;
}

export const MapStateBar: React.FC<MapStateBarProps> = ({ mapState }) => {
  return (
    <div className={Style.bar}>
      <div className={Style.mapStateInfo}>
        <div
          className={`${Style.icon} ${Style.favoriteIcon} ${
            mapState.isFavorite ? Style.favorite : ""
          }`}
          // TODO in TS
          // onClick={onToggle}
        />
        <div className={Style.seperator} />
        <div className={Style.name}>{mapState.name}</div>
      </div>
      <img src={exitIcon} className={Style.icon} />
    </div>
  );
};

export default MapStateBar;
