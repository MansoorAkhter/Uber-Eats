import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'

export default function Home() {

  const [restaurantData, setRestaurantData] = useState(localRestaurants);

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