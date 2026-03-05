import React, { useState } from "react";
import Style from "./App.module.css";
import OptimalPlanningModal from "../OptimalPlanningModal/OptimalPlanningModal";

export const App: React.FC = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={Style.app}>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <OptimalPlanningModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default App;
