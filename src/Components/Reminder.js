import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Dimensions } from "react-native";
import { Pedometer } from "expo-sensors";
import CircularProgress from "react-native-circular-progress-indicator";

export default function Reminder() {
  const [pedometerAvailability, setPedometerAvailability] = useState("");
  const [stepCount, setStepCount] = useState(0);

  const WindowHeight = Dimensions.get("window").height;

  const subscribe = () => {
    const subscription = Pedometer.watchStepCount((result) => {
      setStepCount(result.steps);
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        setPedometerAvailability(String(result));
      },
      (error) => {
        setPedometerAvailability(error);
      }
    );
  };

  useEffect(() => {
    subscribe();
  }, []);

  const Dist = stepCount / 1300;
  const DistanceCovered = Dist.toFixed(4);

  const cal = DistanceCovered * 60;
  const caloriesBurnt = cal.toFixed(4);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../images/runningFinal.jpeg')}
        resizeMode="cover"
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.headingDesign}>
            Is Pedometer available on the device : {pedometerAvailability}
          </Text>
        </View>
        <View style={{ flex: 3 }}>
          <CircularProgress
            value={stepCount}
            maxValue={6500}
            radius={210}
            textColor={"#ecf0f1"}
            activeStrokeColor={"#f39c12"}
            inActiveStrokeColor={"#9b59b6"}
            inActiveStrokeOpacity={0.5}
            inActiveStrokeWidth={40}
            activeStrokeWidth={40}
            title={"Step Count"}
            titleColor={"#ecf0f1"}
            titleStyle={{ fontWeight: "bold" }}
          />
        </View>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.textDesign, { paddingLeft: 20, marginLeft: '23%' }]}>
              Target : 6500 steps(5kms)
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.textDesign, { width: "93%", paddingLeft: 20, marginLeft: '23%' }]}>
              Distance Covered : {DistanceCovered} km
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.textDesign, { paddingLeft: 10, marginLeft: '23%' }]}>
              Calories Burnt : {caloriesBurnt}
            </Text>
          </View>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headingDesign: {
    backgroundColor: "rgba(155, 89, 182,0.5)",
    alignSelf: "center",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Papyrus",
  },
  textDesign: {
    backgroundColor: "rgba(155, 89, 182,0.5)",
    height: 50,
    width : '85%',
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Papyrus",
  },
}); 