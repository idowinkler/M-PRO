import React from "react";
import ArrowButton from "../ArrowButton/ArrowButton";
import Style from './MapStateSwitcher.module.css'

interface MapStateSwitcherProps {
    onClick: React.MouseEventHandler;
}

const MapStateSwitcher: React.FC<MapStateSwitcherProps> = ({onClick}) => {
  return (
    <div className={Style.wrapper}>
        <ArrowButton onClick={() => onClick(-1)} className={Style.rightArrow}/>
        <ArrowButton onClick={() => onClick(1)}/>
    </div>
  ); 
};

export default MapStateSwitcher;