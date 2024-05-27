import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetails = ({ item, style, textStyle }) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{item.duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {item.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {item.affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
