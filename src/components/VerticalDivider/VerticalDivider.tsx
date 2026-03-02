import React from "react";
import Style from './VerticalDivider.module.css'

interface VerticalDividerProps {

}

const VerticalDivider: React.FC<VerticalDividerProps> = () => 
<div className={Style.divider} />

export default VerticalDivider