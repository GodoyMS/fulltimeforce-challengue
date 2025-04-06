import {  StyleSheet, View } from "react-native";
import React, {  useState } from "react";
import { IUser } from "@lib/types/User";
import SwipeCard from "./SwipeCard"; // Make sure to import the ref type
import ActionUserButtons from "./ActionUserButtons";
import { useThemeContext } from "@context/themeContext";
interface IPropsUsersSwipe {
  users: IUser[];
}

const UsersSwipe = (props: IPropsUsersSwipe) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { currentCardRef } = useThemeContext();
  const handleSwipe = (direction: string) => {
    setCurrentIndex((prev) => prev + 1);
  };

  const triggerSwipe = (direction: "like" | "skip" | "superlike") => {
    if (currentCardRef.current) {
      if (direction === "like") currentCardRef.current.swipeRight();
      else if (direction === "skip") currentCardRef.current.swipeLeft();
      else if (direction === "superlike") currentCardRef.current.swipedDown();
    }
  };

  return (
    <>
      {props.users
        .slice(currentIndex)
        .map((card, index) => {
          const isTop = index === 0;
          return (
            <SwipeCard
              key={card.id}
              isTop={isTop}
              ref={isTop ? currentCardRef : null}
              data={card}
              onSwipe={handleSwipe}
            />
          );
        })
        .reverse()}

      <View style={styles.buttons}>
        <ActionUserButtons
          skipAction={() => triggerSwipe("skip")}
          superlikeAction={() => triggerSwipe("superlike")}
          likeAction={() => triggerSwipe("like")}
        />
      </View>
    </>
  );
};

export default UsersSwipe;

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
