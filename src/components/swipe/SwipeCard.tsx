import {
  Dimensions,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
  Extrapolation,
  runOnJS,
} from "react-native-reanimated";
import { ThemedText } from "@components/ui/ThemedText";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { COLORS, SIZES } from "@constants/theme";
import { IUser } from "@lib/types/User";
import { LinearGradient } from "expo-linear-gradient";
import { useImperativeHandle, forwardRef } from "react";
import SuperlikeIMG from "@assets/images/icons/superlike.png";
import { navigate } from "@navigations/rootNavigations";

const { width, height } = Dimensions.get("window");

const SWIPE_THRESHOLD = width * 0.3;
const EXIT_Y_THRESHOLD = height * 0.25;

export type SwipeCardRef = {
  swipeLeft: () => void;
  swipeRight: () => void;
  swipedDown: () => void;
};

const SwipeCard = forwardRef(
  (
    {
      onSwipe,
      data,
      isTop,
    }: {
      onSwipe: (action: string) => void;
      data: IUser;
      isTop: boolean;
    },
    ref
  ) => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const rotate = useSharedValue(0);
    const opacity = useSharedValue(1);
    const superlikeOverlayOpacity = useSharedValue(0);

    // Gesture handler
    const gestureHandler = useAnimatedGestureHandler({
      onStart: (_, ctx: any) => {
        ctx.startX = translateX.value;
        ctx.startY = translateY.value;
      },
      onActive: (event, ctx) => {
        translateX.value = ctx.startX + event.translationX;
        translateY.value = ctx.startY + event.translationY;
        rotate.value = (translateX.value / width) * 15;
      },
      onEnd: () => {
        let action = null;

        if (translateX.value > SWIPE_THRESHOLD) {
          action = "like";
        } else if (translateX.value < -SWIPE_THRESHOLD) {
          action = "skip";
        } else if (translateY.value > EXIT_Y_THRESHOLD) {
          action = "superlike";
        }

       
        if (action) {
          translateX.value = withTiming(
            action === "like" ? width : action === "skip" ? -width : 0
          );
          translateY.value = withTiming(action === "superlike" ? height : 0);
          opacity.value = withTiming(0, {}, () => runOnJS(onSwipe)(action));
        } else {
          translateX.value = withSpring(0);
          translateY.value = withSpring(0);
          rotate.value = withSpring(0);
        }
      },
    });


    const animateOffScreen = (action: string) => {
      const config = { duration: action === "superlike" ? 2000 : 1000 };

      if (action === "superlike") {
        superlikeOverlayOpacity.value = withTiming(0.5, config, (finished) => {
          if (finished) {
            runOnJS(onSwipe)(action);
          }
        });
      } else {
        translateX.value = withTiming(
          action === "like" ? width : action === "skip" ? -width : 0,
          config
        );
        translateY.value = withTiming(0, config);
        opacity.value = withTiming(0, config, (finished) => {
          if (finished) {
            runOnJS(onSwipe)(action);
          }
        });
      }
    };

    
    // Expose swipe methods
    useImperativeHandle(ref, () => ({
      swipeLeft: () => animateOffScreen("skip"),
      swipeRight: () => animateOffScreen("like"),
      swipedDown: () => animateOffScreen("superlike"),
    }));

    // Card animation style
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        { translateX: translateX.value },
        { translateY: isTop ? 0 : -15},
        { rotateZ: `${rotate.value}deg` },
      ],
      
      opacity: opacity.value,
    }));

    const likeOverlayStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        translateX.value,
        [0, SWIPE_THRESHOLD],
        [0, 0.5],
        Extrapolation.CLAMP
      );
      return { opacity };
    });

    const skipOverlayStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        translateX.value,
        [-SWIPE_THRESHOLD, 0],
        [0.5, 0],
        Extrapolation.CLAMP
      );
      return { opacity };
    });

    const superlikeStyle = useAnimatedStyle(() => ({
      opacity: superlikeOverlayOpacity.value,
    }));
    return (
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            styles.card,
            animatedStyle,
            {
              width:isTop ? "100%" :"90%"
            }
          
          ]}
        >
          <ImageBackground
            source={{ uri: data.image }}
            style={[styles.image]}
            imageStyle={styles.imageStyle}
          >
            <LinearGradient
              colors={["transparent", "black"]}
              style={styles.linearGradient}
            >
              <Animated.View
                style={[styles.overlay, styles.likeOverlay, likeOverlayStyle]}
              >
                <FontAwesome name="check" size={64} color="white" />
              </Animated.View>
              <Animated.View
                style={[styles.overlay, styles.skipOverlay, skipOverlayStyle]}
              >
                <FontAwesome name="close" size={64} color="white" />
              </Animated.View>

              <Animated.View
                style={[
                  styles.overlay,
                  styles.superlikeOverlay,
                  superlikeStyle,
                ]}
              >
                <Image source={SuperlikeIMG} />
              </Animated.View>

              <View
                style={{
                  paddingBottom: 112,
                  width: "100%",
                  paddingHorizontal: SIZES.horizontal,
                  flexDirection: "row",
                  zIndex: 500,
                }}
              >
                <View style={{ flex: 1 }}>
                  <ThemedText>
                    {data.name}, {data.age}
                  </ThemedText>
                  <ThemedText weight="regular" type="h4">
                    {data.location}
                  </ThemedText>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigate("ProfileUser", {
                        data,
                      })
                    }
                    style={{
                      backgroundColor: COLORS.primary.high,
                      padding: 4,
                      borderRadius: 40,
                    }}
                  >
                    <Feather name="info" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </Animated.View>
      </PanGestureHandler>
    );
  }
);

export default SwipeCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
    overflow: "hidden",
    position: "absolute",
    elevation: 1,
  },
  image: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  imageStyle: {
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  likeOverlay: {
    backgroundColor: COLORS.primary.low,
    zIndex: 10,
  },
  skipOverlay: {
    backgroundColor: COLORS.gray.low,
    zIndex: 10,
  },
  superlikeOverlay: {
    backgroundColor: COLORS.gray.low,
    zIndex: 10,
  },
});
