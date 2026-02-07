import { Link } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const renderItem = ({ item }: { item: any }) => {
  return (
    <Link screen="ProductDetails" params={{ productId: item.id }}>
      <View style={styles.card}>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        <View style={{ flex: 1, marginLeft: 15 }}>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>
            {"\u20B9"} {item.price}
          </Text>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 220,
    height: 300,
    marginBottom: 25,
  },
  thumbnail: {
    width: 120,
    height: 120,
    borderRadius: 5,
    flex: 0,
    alignSelf: "center",
    justifyContent: "center",
  },

  brand: {
    padding: 5,
    fontSize: 17,
    textAlign: "center",
    fontWeight: "400",
  },
  price: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 17,
  },

  title: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "400",
  },
});
export default renderItem;
