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
isViewed: true,
  };
   const selectedMapState2: MapStateEntity = {
    id: 1,
    name: "מצב שמור בהחלט ארוך ארוך ארוך ארוך ארוך",
    isFavorite: false,
    isHome: true,
    isMyMap: false,
isVerticalDeviderShown: true,
isViewed: true,

  };

   const selectedMapState3: MapStateEntity = {
    id: 1,
    name: "מצב שמור בהחלט ארוך ארוך ארוך ארוך ארוך",
    isFavorite: true,
    isHome: false,
    isMyMap: false,
isVerticalDeviderShown: true,
isViewed: true,

  };

   const selectedMapState4: MapStateEntity = {
    id: 4,
    name: "המפה של סער",
    isFavorite: false,
    isHome: false,
    isMyMap: true,
    isVerticalDeviderShown: true,
isViewed: true,
  };
  
  return (
    <div className={Style.app}>
      <Bar extraClass={Style.wrapper}><MapStateSwitcher onClick={() => {}}/><div>עינב</div></Bar>
      {/* To the my map item we only need to add the switcher, cause everything else exists in the realitiesSelection component.*/}

      <div className={Style.wrapper} style={{width: '23.75rem'}}>
      <MapStateBar mapState={selectedMapState} />
      <MapStateBar mapState={selectedMapState2} />
      <MapStateBar mapState={selectedMapState3} />
      <MapStateBar mapState={selectedMapState4} />
      </div>
      <div className={Style.wrapper} style={{width: '55rem'}}>
      <MapStateListElement mapState={{...selectedMapState, isVerticalDeviderShown: false}} isDocSign/>
      <MapStateListElement mapState={{...selectedMapState2, isVerticalDeviderShown: false, isViewed: false, isFavorite: false, isHome: false}} isDocSign/>
      <MapStateListElement mapState={{...selectedMapState3, isVerticalDeviderShown: false}} isDocSign={false}/>
      </div>
      <button className={Style.saveStateButton}>שמירה וניהול מצבים</button>
      {/*eveything else needed for this button already exists in ts (border, icon with plus) */}

      <div className={Style.favoritesIndicator}></div>
    </div>
    //everything here (not the components used), and in the css, should not be reviewed for it wont whiten :);
  );
};

export default App;
