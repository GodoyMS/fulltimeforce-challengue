import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { dispatch, navigation } from "@navigations/rootNavigations";
import { DrawerActions } from "@react-navigation/native";
import MainContainer from "@components/globals/layout/MainContainer";
import Header from "@components/globals/header/Header";
import TinderSwipe from "@components/swipe/SwipeContainer";
import { useDrawerStatus } from "@react-navigation/drawer";
import { useThemeContext } from "@context/themeContext";
import { RelationShipEnum } from "@lib/types/Relationship";
import { COLORS } from "@constants/theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerStackParameterList } from "@navigations/types";

type HomeProps = NativeStackScreenProps<
  DrawerStackParameterList,
  "ProfileUser"
>;
const HomeScreen = ({ route }: HomeProps) => {
  const drawerStatus = useDrawerStatus();
  const { selectedRelationShip, setColors } = useThemeContext();

  useEffect(() => {
    if (drawerStatus === "closed") {
      if (selectedRelationShip === RelationShipEnum.FRIENDSHIP) {
        setColors([COLORS.friendShip.from, COLORS.friendShip.to]);
      }
      if (selectedRelationShip === RelationShipEnum.DATES) {
        setColors([COLORS.dates.from, COLORS.dates.to]);
      }
      if (selectedRelationShip === RelationShipEnum.RELATIONSHIP) {
        setColors([COLORS.relationShip.from, COLORS.relationShip.to]);
      }
    }
  }, [drawerStatus]);

  return (
    <MainContainer>
      <Header />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 30,
          paddingTop: 25,
          paddingBottom: 60,
        }}
      >
        <TinderSwipe
          
        />
      </View>
    </MainContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
