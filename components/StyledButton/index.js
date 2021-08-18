import React from "react";
import styles from "./styles";
import { View, Text, Pressable } from "react-native";

export default ({ type, content, onPress }) => {
  const backgroundColor = type === "primary" ? "#171A20" : "#FFF";
  const color = type === "primary" ? "#FFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color }]}>{content}</Text>
      </Pressable>
    </View>
  );
};
