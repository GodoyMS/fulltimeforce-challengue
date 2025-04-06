import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { dispatch } from "@navigations/rootNavigations";
import { DrawerActions } from "@react-navigation/native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "@constants/theme";
import MenuImg from "@assets/images/icons/menu.png"
import { useDrawerStatus } from "@react-navigation/drawer";
import { useThemeContext } from "@context/themeContext";
const Header = () => {
  const statusDrawer=useDrawerStatus()
  const{setColors}=useThemeContext()
  if(statusDrawer==="open")return
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: SIZES.horizontal,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          dispatch(DrawerActions.toggleDrawer());
          setColors([COLORS.primary.low,COLORS.primary.low])
        }}
        style={{}}
      >
        <Image
        style={{width:24,height:24}}
          source={MenuImg}
        />
      </TouchableOpacity>

      <TouchableOpacity
        
        style={{}}
      >
        <MaterialCommunityIcons name="filter-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
