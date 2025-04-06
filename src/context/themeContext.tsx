import { SwipeCardRef } from "@components/swipe/SwipeCard";
import { COLORS } from "@constants/theme";
import { RelationShipEnum } from "@lib/types/Relationship";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from "react";

interface ThemeContextProps {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
  selectedRelationShip: RelationShipEnum 
  setSelectedRelationShip: React.Dispatch<
    React.SetStateAction<RelationShipEnum>
  >;
  currentCardRef:React.RefObject<SwipeCardRef>
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colors, setColors] = useState<string[]>([
    COLORS.friendShip.from,
    COLORS.friendShip.to,
  ]);

  const [selectedRelationShip, setSelectedRelationShip] = useState<
    RelationShipEnum 
  >(RelationShipEnum.FRIENDSHIP);

    const currentCardRef = useRef<SwipeCardRef>(null); 
  
  useEffect(() => {
   
    if (selectedRelationShip === RelationShipEnum.FRIENDSHIP) {
      setColors([COLORS.friendShip.from, COLORS.friendShip.to]);
    }

    if (selectedRelationShip === RelationShipEnum.DATES) {
      setColors([COLORS.dates.from, COLORS.dates.to]);
    }
    if (selectedRelationShip === RelationShipEnum.RELATIONSHIP) {
      setColors([COLORS.relationShip.from, COLORS.relationShip.to]);
    }
  }, [selectedRelationShip]);

  return (
    <ThemeContext.Provider
      value={{
        colors,
        setColors,
        selectedRelationShip,
        setSelectedRelationShip,
        currentCardRef
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};
export { ThemeProvider, useThemeContext };
