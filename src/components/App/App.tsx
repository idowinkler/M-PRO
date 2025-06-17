import React from "react";
import Style from "./App.module.css";
import MapStateBar from "../MapStateBar/MapStateBar";
import { MapStateEntity } from "../../types/MapStateEntity";

export const App: React.FC = ({}) => {
  const selectedMapState: MapStateEntity = {
    id: 1,
    name: "מצב שמור בהחלט",
    isFavorite: true,
  };
   const selectedMapState2: MapStateEntity = {
    id: 1,
    name: "מצב שמור בהחלט ארוך ארוך ארוך ארוך ארוך",
    isFavorite: false,
  };

  return (
    <div className={Style.app}>
      <MapStateBar mapState={selectedMapState} />
      <MapStateBar mapState={selectedMapState2} />
    </div>
  );
};

export default App;
