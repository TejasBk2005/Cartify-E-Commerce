import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";

import renderItem from "./Product_Items";

const productsURL = "https://dummyjson.com/products";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await fetch(productsURL);
      const data = await response.json();
      setData(data.products);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.card}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{ padding: 10 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
});

export default ProductList;
