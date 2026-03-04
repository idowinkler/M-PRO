import React from "react";
import { MapStateEntity } from "../../types/MapStateEntity";
import MapStateBar from "../MapStateBar/MapStateBar";
import VerticalDivider from "../VerticalDivider/VerticalDivider";
import docIcon from '../../assets/doc.svg';
import Style from './MapStateListElement.module.css'

interface MapStateListElementProps {
    mapState: MapStateEntity;
    isDocSign: boolean;
}

const MapStateListElement:React.FC<MapStateListElementProps> = ({mapState, isDocSign}) => 
    <div className={Style.container}>
        <MapStateBar mapState={mapState}/>
        <VerticalDivider />
        <div className={Style.creationDetails}>{mapState.isMyMap ? 'מפה ראשית' : <div className={Style.creator}><p className={Style.creatorName}>יוצר: מסריחולי הגדול  ביותר מכולם בעולם</p>ב 24.07.12, 12:15</div>}</div>
        {isDocSign && <img src={docIcon} className={Style.docIcon}/>}
    </div>

export default MapStateListElement;