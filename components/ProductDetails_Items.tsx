import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const detailsrenderItem = ({ item }: { item: any }) => {
  return (
    <View style={styles.detailsContainer}>
      <Image source={{ uri: item.images[0] }} style={styles.image} />

      <Text style={styles.rating}>
        {item.rating}

        <Ionicons name="star" size={15} color="green" />
      </Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.brand}>{item.brand}</Text>
      <Text style={styles.price}>
        {"\u20B9"} {item.price}
      </Text>
      <Text style={styles.availability}>{item.availabilityStatus}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 8,
    height: 1000,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 1,
    marginBottom: 20,
    backgroundColor: "#ececec",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  brand: {
    fontSize: 18,
    color: "gray",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "gray",
  },
  availability: {
    fontSize: 16,
    color: "green",
    marginBottom: 10,
  },
  rating: {
    textAlign: "left",
    fontSize: 15,
    backgroundColor: "white",
    width: 50,
    padding: 5,
    borderRadius: 5,
    bottom: 53,
    left: 5,
  },
});

export default detailsrenderItem;
