import React from "react";
import { Text, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { COLORS, SIZES, FONTS } from "../constants";
const WorkoutSteps = ({ navigation, route }) => {
  console.log(route.params.itemInstrut);

  const renderInstructions = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 30,
          marginVertical: 5,
        }}
      >
          <Image
            source={require("../images/dumbbell.png")}
            style={{
              height: 50,
              width: 50,
              resizeMode: "cover",
            }}
          />
          <View
            
          ></View>
          <Text style={{textAlign:'center' , margin:12}}>{item}</Text>
        </View>
    );
  };

  return (
    <view>
        <Text
          style={{
            flex: 1,
            fontWeight:'bold',
            // ...FONTS.h3
            paddingHorizontal: 30,
          marginVertical: 5,
          }}
        >
          Excercise Steps:
        </Text>
      <FlatList
        //key={parts.length}
        data={route.params.itemInstrut}
        renderItem={renderInstructions}
        keyExtractor={(item) => item.id}
        //numColumns={2}
      />
    </view>
  );
};

export default WorkoutSteps;
