import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({ item }) => {
  // console.log("item:", JSON.stringify(item,3,null))
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Meal Detail", {
      mealId: item.id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={handleNavigation}>
        <View>
          <View>
            <Image style={styles.image} source={{ uri: item.imageUrl }} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <MealDetails item={item} />
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
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
});
