import React, { useState, useEffect } from "react";

import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";

const Search_URL = "https://dummyjson.com/products/search?q=";

const SearchItems = () => {
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(false);

  const getSerachItems = async () => {
    try {
      const response = await fetch(`${Search_URL}${productName}`);
      const data = await response.json();
      setData(data.products);
    } catch (e) {
      console.log("error", e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSerachItems();
  }, []);

  return (
    <View style={styles.container}>
      {isloading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
