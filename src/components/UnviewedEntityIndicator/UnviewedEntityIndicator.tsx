import React from "react";
import Style from "./UnviewedEntityIndicator.module.css"

interface UnviewedEntityIndicatorProps {}

const UnviewedEntityIndicator: React.FC<UnviewedEntityIndicatorProps> = () => 
        <span className={Style.indicator}>[חדש]</span>

export default UnviewedEntityIndicator;