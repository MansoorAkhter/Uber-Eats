import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import RootNavigation from './navigation';

export default function App() {
  return (
    <View //style={styles.container}
    >
      {/* <Home /> */}
      <RootNavigation/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'orange',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
