import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { addToCart } from "../Utils/Cart_List";

const detailsrenderItem = ({ item }: { item: any }) => {
  return (
    <View style={styles.detailsContainer}>
      <Image source={{ uri: item.images[0] }} style={styles.image} />

      <Text style={styles.rating}>
        {item.rating}

        <Ionicons name="star" size={16} color="green" />
      </Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.brand}>{item.brand}</Text>
      <Text style={styles.price}>
        {"\u20B9"} {item.price}
      </Text>
      <Text style={styles.availability}>{item.availabilityStatus}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity
        style={styles.addToCartBtn}
        onPress={async () => {
          ToastAndroid.showWithGravity(
            "Item added to cart",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
          await addToCart({
            id: item.id,
            title: item.title,
            brand: item.brand,
            price: item.price,
            thumbnail: item.images[0],
          });
        }}
      >
        <Text>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
    height: 850,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 15,
    //marginBottom: 5,
    backgroundColor: "#ececec",
    alignItems: "center",
    justifyContent: "center",
  },
  heartbtn: {
    position: "absolute",
    top: 5,
    right: 5,
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
    fontSize: 18,
    color: "gray",
  },
  availability: {
    fontSize: 17,
    color: "green",
    marginBottom: 10,
  },
  rating: {
    textAlign: "left",
    fontSize: 18,
    backgroundColor: "white",
    width: 55,
    padding: 5,
    borderRadius: 10,
    bottom: 35,
    left: 5,
  },
  addToCartBtn: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1.5,
    borderColor: "gray",

    borderRadius: 25,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    top: 50,
  },
});

export default detailsrenderItem;
