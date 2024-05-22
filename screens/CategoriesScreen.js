import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    const handleNavigation = () => {
      navigation.navigate("Meal Detail", { categoryId: item.id});
    };

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        handleNavigation={handleNavigation}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
