export type MapStateEntity = {
  id: number;
  name: string;
  isHome: boolean;
  isMyMap: boolean;
  isVerticalDeviderShown: boolean;
} & (| {isViewed: false; isFavorite: false} 
     | {isViewed: true; isFavorite: boolean})

