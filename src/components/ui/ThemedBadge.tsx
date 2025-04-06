import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useThemeContext } from "@context/themeContext";
import { ThemedText } from "./ThemedText";
interface ThemedBadgeProps {
  title: string;
}
const ThemedBadge = (props: ThemedBadgeProps) => {
  const { colors } = useThemeContext();
  return (
    <View style={{}}>
      <LinearGradient
        style={{ padding: 10, borderRadius: 50 }}
        colors={[colors[0], colors[1]]}
      >
        <ThemedText type="h4">{props.title}</ThemedText>
      </LinearGradient>
    </View>
  );
};

export default ThemedBadge;

const styles = StyleSheet.create({});
