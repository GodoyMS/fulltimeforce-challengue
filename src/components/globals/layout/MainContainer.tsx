import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { MainContainerProps } from "./types";
import { StatusBar } from "expo-status-bar";
import { COLORS, SIZES } from "@constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { useThemeContext } from "@context/themeContext";
import { Animated } from "react-native";


const MainContainer = ({
  children,
  style,
  statusbar = true,
}: MainContainerProps) => {
  const { colors } = useThemeContext();
  
  

  return (
    <SafeAreaView style={[styles.safearea, style]}>
      <LinearGradient colors={[colors[0], colors[1]]} style={{ flex: 1, paddingTop: 44  }}>
        <StatusBar />
        <View style={{ flex: 1,}}>{children}</View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: COLORS.primary.low,

  },
});
