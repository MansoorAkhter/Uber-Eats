import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import BottomTabs from '../components/home/BottomTabs'
import { Divider } from 'react-native-elements'

const YELP_API_KEY =
  "1pThvy2f77-an8XhG-tjHfFhNkRFdx1PNCTo92bSZnXp4w4jnA0m_U8_bor6A0r95yHmKV5yzk1C70JrCtaNZzsfuvncg-h1MMcuibOaJbX_TP181S3QLXgjNN58YnYx";


export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = { headers: { Authorization: `Bearer ${YELP_API_KEY}`, } }

    return fetch(yelpUrl, apiOptions).then((res) => res.json()).then(json => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))))

  };


  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);


  return (
    <View style={{ backgroundColor: "#eee", flex: 1, width: "100%" }}>
    
      <View style={{ backgroundColor: "white", padding: 15, marginTop: 45 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData}
          navigation={navigation}/>
      </ScrollView>

      <Divider width={1}/>
      <BottomTabs />
    </View>
  )
}