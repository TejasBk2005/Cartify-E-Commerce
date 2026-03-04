import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
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
  const getToatalAmount = () => {
    return cart.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0,
    );
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
                  <Text
                    style={{
                      fontWeight: "bold",
                      margin: 5,
                      fontSize: 17,
                    }}
                  >
                    Qty
                  </Text>
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
                    ToastAndroid.showWithGravity(
                      "Item removed",
                      ToastAndroid.SHORT,
                      ToastAndroid.BOTTOM,
                    );
                    await removeFromCart(item.id);
                    loadCart();
                  }}
                >
                  <Ionicons name="trash"></Ionicons>
                  <Text> Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}

      <View style={styles.bottomcard}>
        <Text style={styles.totaltxt}>Total : ₹ {getToatalAmount()}</Text>
        <TouchableOpacity style={styles.poBtn}>
          <Text style={styles.poTxt}>Place order</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 5,
    margin: 10,
    height: 120,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 5,
    backgroundColor: "lightgray",
  },
  brand: { fontSize: 18, fontWeight: "500" },

  title: { fontSize: 15, color: "gray" },

  price: { fontSize: 18, fontWeight: "bold", marginTop: 5 },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    width: 100,
    justifyContent: "center",
  },
  qtyBtn: {
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 1,
    width: 20,
    height: 20,
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
  },
  qtyText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "green",
  },

  rBTN: {
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    width: 70,
    height: 25,
    borderRadius: 6,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    left: 200,
    bottom: 43,
  },
  totaltxt: {
    fontSize: 20,
    textAlign: "left",
    top: 20,
    left: 10,
  },
  bottomcard: {
    backgroundColor: "white",
    marginBottom: 15,
    //marginTop: 730,
    padding: 5,
  },

  poBtn: {
    width: 140,
    height: 40,
    backgroundColor: "gold",
    justifyContent: "center",
    borderRadius: 5,
    left: 250,
    bottom: 10,
  },
  poTxt: {
    fontSize: 20,
    textAlign: "center",
  },
});
export default CartDisplay;
