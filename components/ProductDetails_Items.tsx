import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const detailsrenderItem = ({ item }: { item: any }) => {
  return (
    <View style={styles.detailsContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
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
    flex: 0,
    backgroundColor: "white",
    padding: 20,
    height: 1000,
  },
  image: {
    width: "100%",
    height: 320,
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
});

export default detailsrenderItem;
