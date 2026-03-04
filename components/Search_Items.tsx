import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";

const searchItem = ({ item }: { item: any }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.price}>
          {"\u20B9"} {item.price}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    width: "100%",
    height: 150,
    backgroundColor: "white",
    alignItems: "flex-start",
    marginBottom: 10,
    borderRadius: 10,
  },

  image: {
    width: 125,
    height: 125,
    borderRadius: 10,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
    top: 5,
    margin: 5,
  },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    alignItems: "flex-start",
  },
  brand: {
    fontSize: 18,
    color: "gray",
    alignItems: "flex-start",
  },
  price: {
    flexDirection: "row",
    fontSize: 15,
    fontWeight: "bold",
    //textAlign: "right",
    marginBottom: 10,
  },
});

export default searchItem;
