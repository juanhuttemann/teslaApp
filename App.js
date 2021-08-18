import React from "react";
import { View, StyleSheet } from "react-native";
import CarsList from "./components/CarsList";

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />
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
