import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getWishList, removeWishList } from "../Utils/Wish_List";
import { addToCart } from "../Utils/Cart_List";

const WishScreen = () => {
  const navigation = useNavigation<any>();
  const [wishlist, setWishList] = useState<any[]>([]);

  useFocusEffect(
    useCallback(() => {
      loadWishlist();
    }, []),
  );

  const loadWishlist = async () => {
    const data = await getWishList();
    setWishList(data);
  };

  const removeItem = async (id: number) => {
    await removeWishList(id);
    loadWishlist();
  };

  return (
    <View style={styles.container}>
      {wishlist.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Empty</Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ProductDetails", { productId: item.id })
              }
            >
              <View style={styles.card}>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={styles.thumbnail}
                />

                <View style={{ flex: 1 }}>
                  <Text style={styles.brand}>{item.brand}</Text>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.price}>
                    {"\u20B9"} {item.price}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={() => {
                    ToastAndroid.showWithGravity(
                      "Item removed",
                      ToastAndroid.SHORT,
                      ToastAndroid.BOTTOM,
                    );
                    removeItem(item.id);
                  }}
                >
                  <Ionicons name="close-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.addtocart}
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
                  <Text style={{ textAlign: "center" }}>Add to cart</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5",
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
    marginBottom: 15,
  },

  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "lightgray",
  },

  brand: {
    fontSize: 18,
    fontWeight: "500",
  },

  title: {
    fontSize: 15,
    color: "gray",
  },

  price: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
  },

  removeBtn: {
    padding: 5,
    bottom: 35,
    left: 90,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    marginTop: 10,
    fontSize: 16,
    color: "gray",
  },

  addtocart: {
    width: 80,
    height: 30,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 30,
  },
});

export default WishScreen;
