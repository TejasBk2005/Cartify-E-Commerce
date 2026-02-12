import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import detailsrenderItem from "./ProductDetails_Display";

const productDetailsURL = "https://dummyjson.com/products/";

const ProductDetails = ({ route }: any) => {
  const { productId } = route.params;
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getProductDetails = async () => {
    try {
      const response = await fetch(`${productDetailsURL}${productId}`);
      const data = await response.json();
      setData(data.products ? data.products : [data]);
    } catch (error) {
      console.log("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={detailsrenderItem}
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
export default ProductDetails;
