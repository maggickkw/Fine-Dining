import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color, handleNavigation }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
       onPress={handleNavigation}
       style={styles.buttonStyles}
       >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonStyles: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    fontStyle: "italic",
  },
});
