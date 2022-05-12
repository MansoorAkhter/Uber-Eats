import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'

const YELP_API_KEY =
  "1pThvy2f77-an8XhG-tjHfFhNkRFdx1PNCTo92bSZnXp4w4jnA0m_U8_bor6A0r95yHmKV5yzk1C70JrCtaNZzsfuvncg-h1MMcuibOaJbX_TP181S3QLXgjNN58YnYx";


export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);


  const getRestaurantsFromYelp = () => {
    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Newyork";

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }

    return fetch(yelpUrl, apiOptions).then((res) => res.json()).then(json => setRestaurantData(json.businesses))

  };


  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);


  return (
    <View style={{ backgroundColor: "#eee", flex: 1, width: "100%" }}>
      <View style={{ backgroundColor: "white", padding: 15, marginTop: 45 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </View>
  )
}