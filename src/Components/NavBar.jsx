import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={require("../images/logo.png")}
          style={{ width: 50, height: 50 }}
        />
        {/* <Text style={{fontWeight:'bold' , fontSize:18 , margin:15 , justifyContent:'center'}}>NutriBuddy</Text> */}
        <View style={styles.centreView}>
          <Text style={styles.firstText}>Nutri</Text>
          <Text style={styles.secondText}>Buddy</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => {
            navigation.navigate("SignUpScreen");
          }}
        >
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 14,
    backgroundColor: "lightblue", // Change the background color as needed
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signupButton: {
    padding: 10,
    backgroundColor: "green", // Change the button color as needed
    borderRadius: 5,
  },
  signupText: {
    color: "white",
    fontWeight: "bold",
  },
  centreView: {
    flexDirection: "row",
  },

  firstText: {
    fontSize: 20,
    fontWeight: 800,
    color: "#000",
    justifyContent: "center",
    paddingLeft: 15,
  },

  secondText: {
    fontSize: 20,
    fontWeight: 800,
    color: "red",
    justifyContent: "center",
  },
});

export default Navbar;
