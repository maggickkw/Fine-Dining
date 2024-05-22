import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((el) => {
    return el.categoryIds.indexOf(catId) >= 0;
  });

  const renderItem = ({ item }) => {
    return <MealItem title={item.title} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
