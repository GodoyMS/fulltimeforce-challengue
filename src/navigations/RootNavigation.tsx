import React from "react";

import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {  navigationRef } from "./rootNavigations";
import { SuperRootStackParamList } from "./types";
import DetailedUserProfileScreen from "@screens/DetailedUserProfileScreen";
import DrawerNavigation from "./DrawerNavigation";
import { ThemeProvider } from "@context/themeContext";

const RootStack = createNativeStackNavigator<SuperRootStackParamList>();

const RootStackNavigation = () => {
  const navigationOptions: NativeStackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
  };

  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <RootStack.Navigator
              initialRouteName={"DrawerNavigation"}
              screenOptions={navigationOptions}
            >
              <RootStack.Screen
                name="DrawerNavigation"
                component={DrawerNavigation}
              />
              <RootStack.Screen
                name="ProfileUser"
                component={DetailedUserProfileScreen}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default RootStackNavigation;
