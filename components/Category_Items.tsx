import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import categoryIcons from "../Icons/Category_Icons";

const categoriesItems = ({ item }: { item: any }) => {
  return (
    <View style={styles.card}>
      {categoryIcons[item.slug as keyof typeof categoryIcons] || (
        <MaterialIcons name="category" size={40} color="black" />
      )}
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    //flexDirection:"column",
    flex: 0,
    padding: -10,
    margin: 3,
    marginLeft: 35,
    marginBottom: 30,
    backgroundColor: "white",
    shadowColor: "skyblue",
    shadowOffset: { width: 10, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 10,
    borderRadius: 100,
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 15,
  },

  name: {
    padding: 0,
    textAlign: "center",
    alignItems: "center",
    fontSize: 10,
  },
});

export default categoriesItems;
