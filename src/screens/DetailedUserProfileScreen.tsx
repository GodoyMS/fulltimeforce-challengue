import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { COLORS, SIZES } from "@constants/theme";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { SuperRootStackParamList } from "@navigations/types";
import { IUser } from "@lib/types/User";
import { ThemedText } from "@components/ui/ThemedText";
import ThemedBadge from "@components/ui/ThemedBadge";
import { goBack, navigate, navigation } from "@navigations/rootNavigations";
import ActionUserButtons from "@components/swipe/ActionUserButtons";
import { useThemeContext } from "@context/themeContext";

const { height } = Dimensions.get("window");
const MAX_HEIGHT = height / 2;
const MIN_HEIGHT = 100;

type UserProfileProps = NativeStackScreenProps<
  SuperRootStackParamList,
  "ProfileUser"
>;
const UserProfileScreen = ({ route }: UserProfileProps) => {
  const data = route.params.data as IUser;
  const [expanded, setExpanded] = useState(false);
  const { currentCardRef } = useThemeContext();

  const sheetHeight = useSharedValue(MIN_HEIGHT);
  const imageHeight = useSharedValue(height);

  const toggleDrawer = () => {
    const toValue = expanded ? MIN_HEIGHT : MAX_HEIGHT;
    sheetHeight.value = withSpring(toValue);
    imageHeight.value = withSpring(expanded ? height : height * 0.55);
    setExpanded(!expanded);
  };

  const panGesture = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = sheetHeight.value;
    },
    onActive: (event, ctx: any) => {
      const newHeight = ctx.startY - event.translationY;
      if (newHeight >= MIN_HEIGHT && newHeight <= MAX_HEIGHT) {
        sheetHeight.value = newHeight;
        imageHeight.value = height - newHeight + 50;
      }
    },
    onEnd: () => {
      // Snap to closest position
      const shouldExpand = sheetHeight.value > (MIN_HEIGHT + MAX_HEIGHT) / 2;
      const finalHeight = shouldExpand ? MAX_HEIGHT : MIN_HEIGHT;
      sheetHeight.value = withSpring(finalHeight + 50);
      imageHeight.value = withSpring(height - finalHeight);
      runOnJS(setExpanded)(shouldExpand);
    },
  });

  const bottomSheetStyle = useAnimatedStyle(() => {
    return {
      height: sheetHeight.value,
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      height: imageHeight.value,
    };
  });
  const goToHomeWithParams = (action: string) => {
    goBack()

    if (currentCardRef.current) {

      setTimeout(() => {
        if (action === "skip") currentCardRef.current?.swipeLeft();
        if (action === "superlike") currentCardRef.current?.swipedDown();
        if (action === "like") currentCardRef.current?.swipeRight();
      }, 100);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          paddingHorizontal: SIZES.horizontal,
          justifyContent: "space-between",
          paddingTop: 40,
          left: 0,
          top: 0,
          zIndex: 10,
          width: "100%",
        }}
      >
        <TouchableOpacity onPress={() => goBack()}>
          <AntDesign name="close" size={24} color={COLORS.black} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="more-vertical" size={24} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <Animated.Image
        source={{
          uri: data.image,
        }}
        resizeMode={"cover"}
        style={[styles.image, imageStyle]}
      />

      <PanGestureHandler onGestureEvent={panGesture}>
        <Animated.View style={[styles.bottomSheet, bottomSheetStyle]}>
          <View
            style={[
              bottomSheetStyle,
              {
                position: "relative",
                width: "100%",
                height: "100%",
                flexDirection: "column",
                justifyContent: "space-between",
              },
            ]}
          >
            <TouchableOpacity
              onPress={toggleDrawer}
              style={styles.toggleButton}
            >
              <Entypo
                name={expanded ? "chevron-down" : "chevron-up"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <View>
              <ThemedText type="h2" color="black">
                {data.name}, {data.age}
              </ThemedText>
              <ThemedText type="h4" weight="regular" color="black">
                {data.location}
              </ThemedText>

              <View style={{ paddingTop: 20 }}>
                <ThemedText type="h2" color="black">
                  Intereses
                </ThemedText>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 10,
                    paddingTop: 10,
                  }}
                >
                  {data.interests.map((feat) => (
                    <ThemedBadge key={feat} title={feat} />
                  ))}
                </View>
              </View>
              {data.features && (
                <View style={{ paddingTop: 20 }}>
                  <ThemedText type="h2" color="black">
                    Me considero
                  </ThemedText>
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      gap: 10,
                      paddingTop: 10,
                    }}
                  >
                    {data.features.map((feat) => (
                      <ThemedBadge key={feat} title={feat} />
                    ))}
                  </View>
                </View>
              )}
            </View>
            
            <View style={{paddingTop:20}}>
              <ActionUserButtons
                skipAction={() => goToHomeWithParams("skip")}
                superlikeAction={() => goToHomeWithParams("superlike")}
                likeAction={() => goToHomeWithParams("like")}
              />
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    paddingHorizontal: 34,
    paddingVertical: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 0,
  },
  toggleButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: COLORS.primary.high,
    alignSelf: "center",
    position: "absolute",
    right: -10,
    top: -60,
  },
  toggleText: {
    fontSize: 16,
    color: "blue",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userAge: {
    fontSize: 16,
    color: "gray",
  },
});

export default UserProfileScreen;
