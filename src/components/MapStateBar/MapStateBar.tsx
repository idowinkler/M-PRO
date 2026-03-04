import React from "react";
import { MapStateEntity } from "../../types/MapStateEntity";
import homeIcon from "../../assets/home.svg";
import Bar from "../Bar/Bar";
import VerticalDivider from "../VerticalDivider/VerticalDivider";
import UnviewedEntityIndicator from "../UnviewedEntityIndicator/UnviewedEntityIndicator";
import Style from "./MapStateBar.module.css";

export interface MapStateBarProps {
  mapState: MapStateEntity;
}

export const MapStateBar: React.FC<MapStateBarProps> = ({ mapState }) => {
  const nonMyMapIconClass = `${Style.favoriteIcon} ${
            mapState.isFavorite ? Style.favorite : ''
          } ${mapState.isHome ? Style.homeFavoriteIcon : ''}`

  return <Bar>      
            <div className={Style.mapStateInfo}>
                <div className={mapState.isMyMap ? Style.usersIcon : nonMyMapIconClass} />                
                {mapState.isVerticalDeviderShown && <VerticalDivider />}
                
                {!mapState.isViewed && <UnviewedEntityIndicator />}
                <div className={Style.name}>{mapState.name}</div>
            </div>

            {mapState.isHome && <img src={homeIcon} className={Style.icon} />}
        </Bar>
}
;

export default MapStateBar;
