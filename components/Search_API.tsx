import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import searchItems from "./Search_Items";

const SEARCH_URL = "https://dummyjson.com/products/search?q=";

const SearchItems = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [productName, setProductName] = useState("");

  const getSearchItems = async (name: string) => {
    if (!name) return;

    setLoading(true);
    try {
      const response = await fetch(`${SEARCH_URL}${name}`);
      const result = await response.json();
      setData(result.products);
    } catch (e) {
      console.log("error", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} />

        <TextInput
          placeholder="Search product..."
          value={productName}
          onChangeText={(text) => setProductName(text)}
          onSubmitEditing={() => getSearchItems(productName)}
          style={styles.searchInput}
        />
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={searchItems}
        />
      )}
    </View>
  );
};

export default SearchItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 5,
    backgroundColor: "#ececec",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
  },
  searchInput: {
    marginLeft: 10,
    width: "90%",
  },
});
