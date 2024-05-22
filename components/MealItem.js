import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MealItem = ({ item }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity>
        <View>
        <View>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.details} >
          <Text style={styles.detailItem}>{item.duration}m</Text>
          <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{item.affordability.toUpperCase()}</Text>
        </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  }
});
