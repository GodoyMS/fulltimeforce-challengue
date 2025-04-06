import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { View, StyleSheet, Dimensions, Text, Pressable } from "react-native";
import SwipeCard from "./SwipeCard";
import {
  usersDates,
  usersFriendShip,
  usersMock,
  usersRelationship,
} from "@constants/usersMock";
import { COLORS } from "@constants/theme";
import { FontAwesome6, Fontisto, Ionicons } from "@expo/vector-icons";
import { relationshipList } from "@constants/relationships";
import RelationShipSelector from "./RelationShipSelector";
import { useThemeContext } from "@context/themeContext";
import { RelationShipEnum } from "@lib/types/Relationship";
import { useDrawerStatus } from "@react-navigation/drawer";
import UsersSwipe from "./UsersSwipe";



const TinderSwipe = () => {

  const { selectedRelationShip, setColors } = useThemeContext();



  return (
    <View style={styles.container}>
      {selectedRelationShip === RelationShipEnum.FRIENDSHIP && (
        <UsersSwipe users={usersFriendShip} />
      )}
      {selectedRelationShip === RelationShipEnum.DATES && (
        <UsersSwipe  users={usersDates} />
      )}
      {selectedRelationShip === RelationShipEnum.RELATIONSHIP && (
        <UsersSwipe  users={usersRelationship} />
      )}

      <RelationShipSelector />
    </View>
  );
};

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
    flexDirection: "row",
    justifyContent: "space-evenly",
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

export default TinderSwipe;
