import React from "react";
import { MapStateEntity } from "../../types/MapStateEntity";
import homeIcon from "../../assets/home.svg";
import Bar from "../Bar/Bar";
import Style from "./MapStateBar.module.css";
import VerticalDivider from "../VerticalDivider/VerticalDivider";

export interface MapStateBarProps {
  mapState: MapStateEntity;
}

export const MapStateBar: React.FC<MapStateBarProps> = ({ mapState }) => {
  const nonDefaultMapIconClass = `${Style.icon} ${Style.favoriteIcon} ${
            mapState.isFavorite ? Style.favorite : ""
          } ${mapState.isHome ? Style.homeIcon : ''}`

  return <Bar>      
      <div className={Style.mapStateInfo}>
        <div
          className={mapState.isMyMap ? `${Style.icon} ${Style.usersIcon}` : nonDefaultMapIconClass }
          // TODO in TS
          // onClick={onToggle}
        />
        {mapState.isVerticalDeviderShown && <VerticalDivider />}
        {!mapState.isViewed && <p className={Style.unviewedIndicator}>[חדש]</p>}
        <div className={Style.name}>{mapState.name}</div>
      </div>
      {mapState.isHome && <img src={homeIcon} className={Style.icon} />}
      </Bar>
}
;

export default MapStateBar;
