import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList, StyleSheet, RefreshControl } from "react-native";
import { ActivityIndicator } from "react-native";

import ProductItem from "../screens/Product_ListDisplay";

const productsURL = "https://dummyjson.com/products";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(true);

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
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getProducts().finally(() => setRefreshing(false));
  }, []);

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
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
