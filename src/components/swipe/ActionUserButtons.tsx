import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome6, Fontisto, Ionicons } from "@expo/vector-icons";
import { COLORS } from "@constants/theme";
interface ActionUserButtonsProps{
    skipAction:()=>void;
    superlikeAction:()=>void;
    likeAction:()=>void;

}
const ActionUserButtons = (props:ActionUserButtonsProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <Pressable
        style={[styles.button, { backgroundColor: COLORS.gray.low }]}
        onPress={props.skipAction}
      >
        <Ionicons name="close" size={24} color="white" />
      </Pressable>
      <Pressable
        style={[styles.button, { backgroundColor: COLORS.white,elevation:1 }]}
        onPress={props.superlikeAction}
      >
        <Fontisto name="heart" size={24} color={COLORS.primary.high} />
      </Pressable>
      <Pressable
        style={[styles.button, { backgroundColor: COLORS.primary.medium }]}
        onPress={props.likeAction}
      >
        <FontAwesome6 name="check" size={24} color={COLORS.white} />
      </Pressable>
    </View>
  );
};

export default ActionUserButtons;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
      position: "relative",
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
    },
    buttons: {
      position: "absolute",
      bottom: 30,
      width: "100%",
    },
    buttonsTop: {
      position: "absolute",
      top: 30,
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "100%",
    },
    button: {
      padding: 15,
      borderRadius: 50,
    },
    buttonText: {
      fontSize: 18,
    },
  });
  