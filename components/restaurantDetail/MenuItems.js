import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";


const foods = [
  {
    title: "Lasanga",
    description: "With butter lettuce, tomato & sauce bechamel",
    price: "Rs 600/-",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Whole Tandoori Chicken with Tandoori Roast Potatoes",
    price: "Rs 900/-",
    image:
      "https://i0.wp.com/lovelaughmirch.com/wp-content/uploads/2018/12/Whole-Tandoori-Chicken-with-Tandoori-Roast-Potatoes-_2.jpg?resize=820%2C521",
  },
  {
    title: "Beef Biryani",
    description: "With basmati rice, fresh beef & other ingredients",
    price: "Rs 250/-",
    image:
      "https://www.foodies.pk/wp-content/uploads/2019/05/Chicken-Biryani-Plate-1024x757.jpg",
  },
  {
    title: "Mutton Karahi",
    description: "Mutton/Lamb karahi is such a rich dish!",
    price: "Rs 1500/-",
    image:
      "https://rookiewithacookie.com/wp-content/uploads/2020/03/IMG_2108-1.jpg",
  },
  {
    title: "Lasanga",
    description: "With butter lettuce, tomato & sauce bechamel",
    price: "Rs 600/-",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Whole Tandoori Chicken with Tandoori Roast Potatoes",
    price: "Rs 900/-",
    image:
      "https://i0.wp.com/lovelaughmirch.com/wp-content/uploads/2018/12/Whole-Tandoori-Chicken-with-Tandoori-Roast-Potatoes-_2.jpg?resize=820%2C521",
  },
  {
    title: "Beef Biryani",
    description: "With basmati rice, fresh beef & other ingredients",
    price: "Rs 250/-",
    image:
      "https://www.foodies.pk/wp-content/uploads/2019/05/Chicken-Biryani-Plate-1024x757.jpg",
  },
  {
    title: "Mutton Karahi",
    description: "Mutton/Lamb karahi is such a rich dish!",
    price: "Rs 1500/-",
    image:
      "https://rookiewithacookie.com/wp-content/uploads/2020/03/IMG_2108-1.jpg",
  },
  {
    title: "Lasanga",
    description: "With butter lettuce, tomato & sauce bechamel",
    price: "Rs 600/-",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "Whole Tandoori Chicken with Tandoori Roast Potatoes",
    price: "Rs 900/-",
    image:
      "https://i0.wp.com/lovelaughmirch.com/wp-content/uploads/2018/12/Whole-Tandoori-Chicken-with-Tandoori-Roast-Potatoes-_2.jpg?resize=820%2C521",
  },
  {
    title: "Beef Biryani",
    description: "With basmati rice, fresh beef & other ingredients",
    price: "Rs 250/-",
    image:
      "https://www.foodies.pk/wp-content/uploads/2019/05/Chicken-Biryani-Plate-1024x757.jpg",
  },
  {
    title: "Mutton Karahi",
    description: "Mutton/Lamb karahi is such a rich dish!",
    price: "Rs 1500/-",
    image:
      "https://rookiewithacookie.com/wp-content/uploads/2020/03/IMG_2108-1.jpg",
  },
];



const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems({ restaurantName }) {

  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) => {
    console.log("dsadsaddd",item, checkboxValue)
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 90, height: 90, borderRadius: 8 }}
    />
  </View>
);
