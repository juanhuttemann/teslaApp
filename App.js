import React from "react";
import { View, StyleSheet } from "react-native";
import CarItem from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name="Model X"
        tagline="Order Online For"
        taglineCTA="Touchless Delivery"
        image={require("./assets/images/ModelX.jpeg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
