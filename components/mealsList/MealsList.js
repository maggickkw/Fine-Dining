import { StyleSheet, FlatList, View } from 'react-native'

import MealItem from '../MealItem'

const MealsList = ({ displayMeals}) => {

    const renderItem = ({item}) => {
        return <MealItem item={item} />;
      };

    return (
        <View style={styles.container}>
          <FlatList
            data={displayMeals}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      );
}

export default MealsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
      },
})