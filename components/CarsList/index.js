import React from "react";
import styles from "./styles";
import cars from "./cars";
import { View, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem";

export default () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment="start"
        decelerationRate="normal"
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
