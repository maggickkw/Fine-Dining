import { MEALS, CATEGORIES } from "../data/dummy-data";

import { useLayoutEffect } from "react";
import MealsList from "../components/mealsList/MealsList";

const MealScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((el) => {
    return el.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((el) => el.id === catId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList displayMeals={displayMeals} />;
};

export default MealScreen;
