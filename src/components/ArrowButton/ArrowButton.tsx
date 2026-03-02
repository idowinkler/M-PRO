import React from "react";
import arrowIcon from '../../assets/arrow.svg'
import Style from './ArrowButton.module.css'

interface ArrowButtonProps {
    onClick: React.MouseEventHandler;
    className?: string
}

const ArrowButton: React.FC<ArrowButtonProps> = ({onClick, className}) => 
<button className={Style.button} onClick={onClick}>
    <img src={arrowIcon} className={className}/> 
</button>
 //Will be swap by IconButton

export default ArrowButton