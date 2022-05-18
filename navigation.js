import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';


const RootNavigation = () => {
  const Stack = createStackNavigator();
  
  const screenOptions = {
    headerShown: false,
  }


  return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


export default RootNavigation;
