import React from "react";
import MapStateBar from "../MapStateBar/MapStateBar";
import { MapStateEntity } from "../../types/MapStateEntity";
import MapStateSwitcher from "../MapStateSwitcher/MapStateSwitcher";
import Bar from "../Bar/Bar";
import Style from "./App.module.css";
import MapStateListElement from "../MapStateListElement/MapStateListElement";

export const App: React.FC = ({}) => {
  const selectedMapState: MapStateEntity = {
    id: 1,
    name: "מצב שמור בהחלט",
    isFavorite: true,
    isHome: true,
    isMyMap: false,
isVerticalDeviderShown: true,

  };
   const selectedMapState2: MapStateEntity = {
    id: 1,
    name: "מצב שמור בהחלט ארוך ארוך ארוך ארוך ארוך",
    isFavorite: false,
    isHome: false,
    isMyMap: false,
isVerticalDeviderShown: true,

  };

   const selectedMapState3: MapStateEntity = {
    id: 1,
    name: "מצב שמור בהחלט ארוך ארוך ארוך ארוך ארוך",
    isFavorite: true,
    isHome: false,
    isMyMap: false,
isVerticalDeviderShown: true,
  };

   const selectedMapState4: MapStateEntity = {
    id: 4,
    name: "המפה של סער",
    isFavorite: false,
    isHome: false,
    isMyMap: true,
    isVerticalDeviderShown: true,

  };
  //הדבר היחיד שצריך להוסיף הוא הכפתורים קדימה ואחורה, השאר קיים בתוך קומפוננטת realitiesSelection

  return (
    <div className={Style.app}>
      <Bar extraClass={Style.wrapper}><MapStateSwitcher onClick={() => {}}/><div>עינב</div></Bar>
      <div className={Style.wrapper} style={{width: '23.75rem'}}>
      <MapStateBar mapState={selectedMapState4} />
      <MapStateBar mapState={selectedMapState} />
      <MapStateBar mapState={selectedMapState2} />
      <MapStateBar mapState={selectedMapState3} />
      </div>
      <div className={Style.wrapper} style={{width: '55rem'}}>
      <MapStateListElement mapState={{...selectedMapState, isVerticalDeviderShown: false}} isDocSign/>
      <MapStateListElement mapState={{...selectedMapState2, isVerticalDeviderShown: false}} isDocSign/>
      <MapStateListElement mapState={{...selectedMapState3, isVerticalDeviderShown: false}} isDocSign={false}/>
      </div>
      <button className={Style.saveStateButton}>שמירה וניהול מצבים</button>
    </div>
    //saveStateButton icon and other css settings are already exist in our code
  );
};

export default App;
