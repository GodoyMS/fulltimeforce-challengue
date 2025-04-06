import RootStackNavigation from "@navigations/RootNavigation";
import { useFonts } from "expo-font";

export default function App(){

    const [fontsLoaded] = useFonts({
       DMBold: require("./src/assets/fonts/DMSans-Bold.ttf"),
       DMMedium: require("./src/assets/fonts/DMSans-Medium.ttf"),
       DMRegular: require("./src/assets/fonts/DMSans-Regular.ttf"),
     });
     if (!fontsLoaded) {
       return null;
     }

   return <RootStackNavigation />

}