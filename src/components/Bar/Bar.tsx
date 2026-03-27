import React from "react";
import Style from './Bar.module.css'

interface BarProps {
  children: React.ReactNode;
  extraClass?: string;
}


const Bar: React.FC<BarProps> = ({ children, extraClass }) => {
  return (
    <div className={`${Style.wrapper} ${extraClass}`}>
        {children}
    </div>
  ); 
};

//This componet only helped me for the ui here, in the ts it will be united with the map state bar component (itll be the children)

export default Bar;