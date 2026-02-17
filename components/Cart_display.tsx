import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import {
  getCartItems,
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../Utils/Cart_List";
import { Ionicons } from "@expo/vector-icons";

const CartDisplay = () => {
  const [cart, setCart] = useState<any[]>([]);

  useFocusEffect(
    useCallback(() => {
      loadCart();
    }, []),
  );

  const loadCart = async () => {
    const data = await getCartItems();
    setCart(data);
  };

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text style={{ textAlign: "center", alignItems: "center" }}>
          Your Cart is Empty 🛒
        </Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.thumbnail }} style={styles.image} />
              <View style={{ flex: 1, top: 20 }}>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>₹ {item.price}</Text>
                <View style={styles.qtyRow}>
                  <TouchableOpacity
                    onPress={async () => {
                      await decreaseQty(item.id);
                      loadCart();
                    }}
                  >
                    <Text style={styles.qtyBtn}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>{item.quantity}</Text>
                  <TouchableOpacity
                    onPress={async () => {
                      await increaseQty(item.id);
                      loadCart();
                    }}
                  >
                    <Text style={styles.qtyBtn}>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.rBTN}
                  onPress={async () => {
                    await removeFromCart(item.id);
                    loadCart();
                  }}
                >
                  <Ionicons name="trash">
                    <Text>Remove</Text>
                  </Ionicons>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 12,
    marginBottom: 15,
    margin: 10,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "lightgray",
  },
  brand: { fontSize: 18, fontWeight: "500" },

  title: { fontSize: 15, color: "gray" },

  price: { fontSize: 15, fontWeight: "bold", marginTop: 5 },

  qty: {
    marginTop: 4,
    fontSize: 16,
    left: 225,
    bottom: 40,
    color: "green",
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    width: 100,
    justifyContent: "center",
  },
  qtyBtn: {
    fontSize: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
  },
  qtyText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
  },

  rBTN: {
    borderStyle: "solid",
    borderWidth: 1,
    width: 80,
    height: 30,
    borderRadius: 6,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    left: 200,
    bottom: 35,
  },
});
export default CartDisplay;
