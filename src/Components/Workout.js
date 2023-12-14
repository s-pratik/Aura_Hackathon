import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ScreenWidth = Dimensions.get("window").width;

const Workout = () => {
  const [parts, setParts] = useState([]);
  const [input, setInput] = useState("");
  const navigation = useNavigation();
  const fetchExercises = async (partName) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${partName}?limit=10`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "20cab373a0msh41517240ada5132p1e9ac8jsn8034fd69da97",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result[0].name);
      setParts(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchExercises(input);
  }, [input]);

  const renderWorkout = ({ item }) => {
    return (
      <TouchableOpacity
      onPress={() => {
        navigation.navigate("WorkoutSteps" , {
          itemInstrut: item.instructions,
        });
      }}
        style={{
          flexDirection: "column",
          alignItems: "center",
          padding: 10,
          marginTop: 10,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.gray2,
          marginHorizontal: 15,
          width: (ScreenWidth - 40) / 2 - 10,
        }}
      >
        <Image
          source={{ uri: item.gifUrl }}
          resizeMode="cover"
          style={{
            width: 120,
            height: 120,
            borderRadius: SIZES.radius,
          }}
        />
        <View
          style={{
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <Text
            numberOfLines={3}
            style={{
              flex: 1,
              // ...FONTS.h2,
              marginBottom: 15,
              fontWeight:'bold'
            }}
          >
            {item.name}
          </Text>
          <Text
            numberOfLines={3}
            style={{
              flex: 1,
              // ...FONTS.h2,
              marginBottom: 15,
            }}
          >
            Equipment: {item.equipment}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}
      >
        <Image
          source={require("../images/search.png")}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />
        <TextInput
          style={{
            marginLeft: SIZES.radius,
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search here"
          onChangeText={(text) => setInput(text)}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          key={parts.length}
          data={parts}
          renderItem={renderWorkout}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Workout;
