import React from "react";
import { MapStateEntity } from "../../types/MapStateEntity";
import homeIcon from "../../assets/home.svg";
import usersIcon from '../../assets/users.svg';
import hollowHeartIcon from '../../assets/hollowHeart.svg';
import Bar from "../Bar/Bar";
import VerticalDivider from "../VerticalDivider/VerticalDivider";
import UnviewedEntityIndicator from "../UnviewedEntityIndicator/UnviewedEntityIndicator";
import Style from "./MapStateBar.module.css";

export interface MapStateBarProps {
  mapState: MapStateEntity;
}

export const MapStateBar: React.FC<MapStateBarProps> = ({ mapState }) => {
  const selectedMapStateClass = `${Style.heartIcon} ${
            mapState.isFavorite ? Style.favorite : ''
          } ${mapState.isHome ? Style.home : ''}`;
  const icon = mapState.isMyMap ? usersIcon : hollowHeartIcon;

  return <Bar>      
            <div className={Style.mapStateInfo}>
                <button>
                  <img src={icon} className={mapState.isMyMap ? Style.usersIcon : selectedMapStateClass}>
                  </img>
                </button> 
                {/*TODO: switch to IconButton */}               
                {mapState.isVerticalDeviderShown && <VerticalDivider />}
                
                {!mapState.isViewed && <UnviewedEntityIndicator />}
                <div className={Style.name}>{mapState.name}</div>
            </div>

            {mapState.isHome && <img src={homeIcon} />}
        </Bar>
}
;

export default MapStateBar;
