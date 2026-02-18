import React, { useState, useEffect, useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import {
  addToWishList,
  removeWishList,
  isInWishList,
} from "../Utils/Wish_List";

const ProductItem = ({ item }: { item: any }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    checkWishList();
  }, []);

  const checkWishList = async () => {
    const exists = await isInWishList(item.id);
    setLiked(exists);
  };

  const toggleWishList = async () => {
    if (liked) {
      await removeWishList(item.id);
      setLiked(false);
    } else {
      await addToWishList(item);
      setLiked(true);
    }
  };

  return (
    <Link screen="ProductDetails" params={{ productId: item.id }}>
      <View style={styles.card}>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        <TouchableOpacity style={styles.heartbtn} onPress={toggleWishList}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={22}
            color={liked ? "red" : "gray"}
          />
        </TouchableOpacity>
        <Text style={styles.rating}>
          {item.rating}
          <Ionicons name="star" size={14} color="green" />
        </Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>
          {"\u20B9"} {item.price}
        </Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 0,
    padding: 5,

    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 220,
    height: 350,
    marginBottom: 20,
  },
  thumbnail: {
    width: 170,
    height: 170,
    borderRadius: 10,
    flex: 0,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#ececec",
    marginBottom: -20,
  },

  brand: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "400",
  },
  price: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 17,
    top: 10,
  },

  title: {
    padding: -30,
    textAlign: "left",
    fontSize: 15,
    fontWeight: "600",
    color: "gray",
    top: 5,
  },
  rating: {
    textAlign: "left",
    fontSize: 12,
    backgroundColor: "white",
    width: 45,
    padding: 5,
    borderRadius: 15,
    bottom: 10,
    left: 2,
  },
  heartbtn: {
    position: "absolute",
    bottom: 245,
    left: 140,
    width: 28,
    height: 28,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ProductItem;
