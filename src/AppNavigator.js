import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./Components/Splash";
import Home from "./Screens/Home";
import Nutrition from "./Components/Nutrition";
import Recipie from "./Components/Recipie";
import Reminder from "./Components/Reminder";
import Workout from "./Components/Workout";
import Rdetails from "./Components/Rdetails";

import Instructions from "./Components/Instructions";
import NutriDetails from "./Components/NutriDetails";
import WorkoutSteps from "./Components/WorkoutSteps";

import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import userAuth from "../hooks/useAuth";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const {user} = userAuth();

  // if(user){
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName='Home'>
  //         <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   )
  // }else{
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName='Welcome'>
  //         <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
  //         <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
  //         <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   )
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Nutrition"
          component={Nutrition}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Recipie"
          component={Recipie}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Workout"
          component={Workout}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Reminder"
          component={Reminder}
          options={{ headerShown: true }}
        />
        {/*
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: true }}
        />  */}
        <Stack.Screen
          name="Rdetails"
          component={Rdetails}
          options={{ title: "Details", headerShown: false }}
        />
        <Stack.Screen
          name="Instructions"
          component={Instructions}
          options={{ title: "Instructions", headerShown: false }}
        />
        <Stack.Screen
          name="NutriDetails"
          component={NutriDetails}
          options={{ title: "NutriDetails", headerShown: false }}
        />

        {/* <Stack.Screen
          name="newRegister"
          component={newRegister}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="loginNew"
          component={loginNew}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="newLogin"
          component={newLogin}
          options={{ headerShown: true }}
        /> */}
        

        <Stack.Screen
          name="WorkoutSteps"
          component={WorkoutSteps}
          options={{ headerShown: true }}
        />
        {/* <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        /> */}
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUpScreen"
          options={{ headerShown: false }}
          component={SignUpScreen}
        />
        {/* <Stack.Screen
          name="firstHomeScreen"
          component={firstHomeScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
