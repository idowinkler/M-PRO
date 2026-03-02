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

export default Bar;