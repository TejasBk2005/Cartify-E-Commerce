import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";

import ProductItem from "./Product_ListDisplay";

const productsURL = "https://dummyjson.com/products";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
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
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ProductItem item={item} />}
          numColumns={2}
          contentContainerStyle={{ padding: 10 }}
          columnWrapperStyle={{
            justifyContent: "space-around",
            marginBottom: 30,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    left: -1,
    margin: -10,
    marginTop: 5,
    marginBottom: 1,
  },
});

export default ProductList;
