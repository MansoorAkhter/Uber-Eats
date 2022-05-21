import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function ViewCart() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        flexDirection: "row",
        position: "absolute",
        bottom:330,
        zIndex: 999
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",

        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "black",
            alignItems: "center",
            padding: 10,
            borderRadius: 30,
            width: 300,
            position: "relative",
          }}
        >
        <Text style={{color:"white", fontSize:20}}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>

    // <View style={{ zIndex: 999, top: 425 }}>
    //   <View
    //     style={{
    //       alignSelf: "center",
    //       justifyContent: "center",
    //       flexDirection: "row",
    //       position: "relative",
    //     }}
    //   >
    //     <Text
    //       style={{
    //         color: "white",
    //         fontSize: 20,
    //         backgroundColor: "black",
    //         textAlign: "center",
    //         width: "70%",
    //         borderRadius: 30,
    //         padding: 10,
    //       }}
    //     >
    //       VIEWCART
    //     </Text>
    //   </View>
    // </View>
  );
}
