import { View, Text, Image } from 'react-native'
import React from 'react'


const yelpRestaurantInfo = {
  name: "Abmrosia",
  image: "http://www.brandsynario.com/wp-content/uploads/2017/07/lale-rumi.jpg",
  price: "Rs",
  reviews: "725",
  rating: 4.5,
  categories: [{ title: "Thai" }, { title: "Comfort Food" }, { title: "Coffee" }, { title: "Ice Cream" }, { title: "Snacks" }],
}


const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join('.');

const description = `${formattedCategories} ${price ? " . " + price : ""} ${rating} - ${reviews}`;


export default function About() {
  return (

    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDetail description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
)

const RestaurantName = (props) => (
  <Text style={{ fontSize: 29, fontWeight: "600", marginTop: 10, marginHorizontal: 15 }}>{props.name}</Text>
)

const RestaurantDetail = (props) => (
  <Text style={{ marginTop: 10, marginHorizontal: 15, fontWeight: "400", fontSize: 15.5 }}>{props.description}</Text>
)