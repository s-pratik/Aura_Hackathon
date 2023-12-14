import {
  View,
  Text,
  textColor,
  StyleSheet,
  Image,
  Button,
  onPress,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import mystyle from "../Styles/homeStyles";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import { Dimensions } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";
import NavBar from '../Components/NavBar'

const ScreenWidth = Dimensions.get("window").width;

const Home = () => {
  const navigation = useNavigation();

  const navNutrition = () => {
    navigation.navigate("Nutrition");
  };
  const navRecipie = () => {
    navigation.navigate("Recipie");
  };
  const navReminder = () => {
    navigation.navigate("Reminder");
  };
  const navDietplan = () => {
    navigation.navigate("Workout");
  };
  const { height, width, scale, fontScale } = useWindowDimensions();


  const Boxes = () => {
    return (
      <ScrollView backgroundColor='lightblue'>
<View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: 'lightblue',
        }}
      >
        <TouchableOpacity
          onPress={navNutrition}
          style={{
            // flexDirection: "column",
            alignItems: "center",
            padding: 10,
            marginTop: 10,
            borderRadius: SIZES.radius,
            backgroundColor: "#96e665",
            marginHorizontal: 15,
            width: ScreenWidth / 2,
          }}
        >
          <Image
            source={require("../images/nutrition.png")}
            resizeMode="cover"
            style={{
              width: 150,
              height: 150,
              borderRadius: SIZES.radius,
            }}
          />
          <Text style={{fontSize:18,fontWeight:'bold'}}>Nutrition</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={navRecipie}
          style={{
            // flexDirection: "column",
            alignItems: "center",
            padding: 10,
            marginTop: 10,
            borderRadius: SIZES.radius,
            backgroundColor: "#96e665",
            marginHorizontal: 15,
            width: ScreenWidth / 2,
          }}
        >
          <Image
            source={require("../images/recipie.png")}
            resizeMode="cover"
            style={{
              width: 150,
              height: 150,
              borderRadius: SIZES.radius,
            }}
          />
          <Text style={{fontSize:18,fontWeight:'bold'}}>Recipie</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={navDietplan}
          style={{
            //flexDirection: "column",
            alignItems: "center",
            padding: 10,
            marginTop: 10,
            borderRadius: SIZES.radius,
            backgroundColor: "#96e665",
            marginHorizontal: 15,
            width: ScreenWidth / 2,
          }}
        >
          <Image
            source={require("../images/workout.png")}
            resizeMode="cover"
            style={{
              width: 150,
              height: 150,
              borderRadius: SIZES.radius,
            }}
          />
          <Text style={{fontSize:18,fontWeight:'bold'}}>Workout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={navReminder}
          style={{
            //flexDirection: "column",
            alignItems: "center",
            padding: 10,
            marginTop: 10,
            borderRadius: SIZES.radius,
            backgroundColor: "#96e665",
            marginHorizontal: 15,
            width: ScreenWidth / 2,
          }}
        >
          <Image
            source={require("../images/better-health.png")}
            resizeMode="cover"
            style={{
              width: 150,
              height: 150,
              borderRadius: SIZES.radius,
            }}
          />
          <Text style={{fontSize:18,fontWeight:'bold'}}>Tracking</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      
    );
  };

  return (
    <View>
      <NavBar />
      <Boxes />
    </View>
  );
};

export default Home;
