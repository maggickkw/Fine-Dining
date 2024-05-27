import { Image, ScrollView, StyleSheet, Text, View, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import {  useLayoutEffect } from "react";
import LikeIcon from "../components/LikeIcon";
import { useDispatch, useSelector } from "react-redux";
// import { FavoritesContext } from "../store/context/favorites-context";

import { addFavorite, removeFavorite } from "../store/redux/favorites";


const MealDetail = ({ route, navigation }) => {

  // const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

const mealIsFavorite = favoriteMealIds.includes(mealId);

  const handlePress = () => {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId}));

    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {navigation.setOptions({
    headerRight:  () => {
      return <LikeIcon icon={mealIsFavorite ? 'star': 'star-outline'} handlePress={handlePress}  />
    }
  })}, [navigation, handlePress])

  if (!selectedMeal) {
    return (
      <View style={styles.centered}>
        <Text>Meal not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ marginBottom: 32}}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails item={selectedMeal} textStyle={styles.detailText} />
     <View style={styles.listOuterContainer}>
      <View style={styles.list}>
      <Text style={styles.subtitle}>Ingredients</Text>
      {selectedMeal?.ingredients?.map((el) => (
        <Text style={styles.listItem} key={el}>
          {el}
        </Text>
      ))}
      </View>
      <View style={styles.list}>
      <Text style={styles.subtitle}>Steps</Text>
      {selectedMeal?.steps?.map((el) => (
        <Text style={styles.listItem} key={el}>
          {el}
        </Text>
      ))}
      </View>
      </View>
    </ScrollView>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 24,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
    color: '#351401',
    textAlign: 'center'

  },
  list: {
    width: '80%'
  },
  listOuterContainer: {
    alignItems: 'center'
  }
});
