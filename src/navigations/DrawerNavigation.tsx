import { Image, Text, TouchableOpacity, View } from "react-native";
import { DrawerStackParameterList } from "./types";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerNavigationOptions,
  useDrawerStatus,
} from "@react-navigation/drawer";

import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS, FONT, SIZES } from "@constants/theme";

import React from "react";

import HomeScreen from "@screens/HomeScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useThemeContext } from "@context/themeContext";
import ProfileImg from "@assets/images/drawer/profile.jpg";
import { ThemedText } from "@components/ui/ThemedText";
import { menuItems } from "@constants/menu";
import { dispatch } from "./rootNavigations";
import { DrawerActions } from "@react-navigation/native";
const Drawer = createDrawerNavigator<DrawerStackParameterList>();

const screenOptions: DrawerNavigationOptions = {
  headerShown: false,
  headerTitleAlign: "center",
  drawerType: "slide",
  overlayColor: "transparent",
  drawerStyle: {
    backgroundColor: "transparent",
    width: 200,
  },
};
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}
      drawerContent={CustomDrawerContent}
    >
      {menuItems.map((menu) => (
        <Drawer.Screen
        
          name={menu.route}
          component={HomeScreen}
          key={menu.id}
          options={{
            drawerActiveBackgroundColor: "transparent",
            drawerActiveTintColor: "white",
            drawerLabel: menu.label,
            drawerLabelStyle: {
              fontSize: 14,
              fontWeight: FONT.bold,
              color: COLORS.white,
            },

            drawerIcon: ({
              focused,
              color,
              size,
            }: {
              focused: boolean;
              color: boolean;
              size: number;
            }) => menu.icon,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

export type userProps = {
  id: number;
  displayName: string;
  email: string;
  phoneNumber: string;
  photoURL: string;
  uid: string;
};

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { bottom } = useSafeAreaInsets();

  const { colors } = useThemeContext();
  const drawerStatus = useDrawerStatus();
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={{ flex: 1, paddingTop: 35 }}
        colors={[colors[0], colors[1]]}
      >
        <View style={{paddingHorizontal:SIZES.horizontal }}>
          <View style={{paddingBottom:34}}>
            <TouchableOpacity
              onPress={() => dispatch(DrawerActions.toggleDrawer())}
            >
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={{ paddingBottom: 5 }}>
            <Image
              source={ProfileImg}
              style={{
                width: 84,
                height: 84,
                alignSelf: "center",
                objectFit: "cover",
                borderRadius: 1000,
              }}
            />
          </View>
          <ThemedText type="h2" weight="bold" style={{ alignSelf: "center" }}>
            Andrea, 20
          </ThemedText>
          <ThemedText type="h4" weight="bold" style={{ alignSelf: "center" }}>
            Surco
          </ThemedText>
        </View>
        <DrawerContentScrollView
          {...props}
          scrollEnabled={true}
          style={{ paddingTop: 15  }}
        >
          <DrawerItemList {...props} />
          <View style={{ paddingHorizontal: 15, paddingTop: 69 }}>
            <LogoutButton />
          </View>
        </DrawerContentScrollView>
      </LinearGradient>
    </View>
  );
}

function LogoutButton() {
  return (
    <TouchableOpacity
      style={{
        zIndex: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <MaterialCommunityIcons name="logout" size={24} color="white" />
      <ThemedText type="h5">Cerrar sesión</ThemedText>
    </TouchableOpacity>
  );
}
