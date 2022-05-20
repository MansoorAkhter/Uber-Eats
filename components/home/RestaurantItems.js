import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Lal Qila",
    image_url: "https://foodmenu.com.pk/restaurants/imgs/Karachi/lalqila-restaurant-3.jpg",
    categories: ["Cafe", "Bar"],
    price: "Rs",
    review: 1245,
    rating: 4.5,
  },
  {
    name: "Ambrosia",
    image_url: "http://www.brandsynario.com/wp-content/uploads/2017/07/lale-rumi.jpg",
    categories: ["Cafe", "Bar"],
    price: "Rs",
    review: 995,
    rating: 3.9,
  },
  {
    name: "Kababjees",
    image_url: "https://thecookbook.pk/wp-content/uploads/2019/01/Charcoal-BBQ-n-Grill-Restaurant-at-Do-Darya-DHA-Karachi-.jpg",
    categories: ["Cafe", "Bar"],
    price: "Rs",
    review: 732,
    rating: 4.7,
  },
]

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity key={index} activeOpacity={1} style={{ marginBottom: 30 }}
          onPress={() => navigation.navigate("RestaurantDetail", {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            reviews: restaurant.review_count,
            rating: restaurant.rating,
            categories: restaurant.categories,
          })
          }
        >
          <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>

            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <TouchableOpacity>
      <Image source={{ uri: props.image, }}
        style={{ width: "100%", height: 180, borderRadius: 5 }} />
    </TouchableOpacity>


    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, }}>

    <View>
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "grey" }}>30-45 min</Text>
    </View>

    <View style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 }}>
      <Text>{props.rating}</Text>
    </View>

  </View>
)
