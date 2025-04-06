import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "@constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { relationshipList } from "@constants/relationships";
import { useThemeContext } from "@context/themeContext";
import { ThemedText } from "@components/ui/ThemedText";

const RelationShipSelector = () => {
  const { setSelectedRelationShip, selectedRelationShip } = useThemeContext();
  return (
    <View style={styles.buttonsTop}>
      {relationshipList.map((e) => (
        <View
          key={e.id}
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            opacity: selectedRelationShip === e.name ? 1 : 0.5,
          }}
        >
          <View
            style={{
              padding: 3,
              borderRadius: 50,
              borderColor: COLORS.primary.low,
              borderWidth: selectedRelationShip === e.name ? 1 : 0,
            }}
          >
            <TouchableOpacity
              style={[styles.button, { backgroundColor: COLORS.gray.low }]}
              onPress={() => setSelectedRelationShip(e.name)}
            >
              <Image style={{ width: 44, height: 44 }} source={e.image} />
            </TouchableOpacity>
          </View>
          {selectedRelationShip === e.name && (
            <ThemedText type="h5" color="white">
              {e.label}
            </ThemedText>
          )}
        </View>
      ))}
    </View>
  );
};

export default RelationShipSelector;

const styles = StyleSheet.create({
  buttonsTop: {
    position: "absolute",
    top: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  button: {
    borderRadius: 50,
  },
});
