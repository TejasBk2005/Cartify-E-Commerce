import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getWishList, removeWishList } from "../Utils/Wish_List";

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
                  style={styles.heartBtn}
                  onPress={() => removeItem(item.id)}
                >
                  <Ionicons name="heart" size={24} color="red" />
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
    fontSize: 14,
    fontWeight: "500",
  },

  title: {
    fontSize: 13,
    color: "gray",
  },

  price: {
    fontWeight: "bold",
    marginTop: 5,
  },

  heartBtn: {
    padding: 5,
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
});

export default WishScreen;
