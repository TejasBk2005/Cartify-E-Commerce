import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";

import CategoriesItem from "./Category_Items";

const homeURL = "https://dummyjson.com/products/categories";

const CategoriesList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [showAll, setshowAll] = useState(false);

  const getCategories = async () => {
    try {
      const response = await fetch(homeURL);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log("Error fetching categoires", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  const visibleData = showAll ? data : data.slice(0, 8);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.card}>
          <FlatList
            data={visibleData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <CategoriesItem item={item} />}
            numColumns={4}
            //showsVerticalScrollIndicator={false}
          />

          {data.length > 8 && (
            <TouchableOpacity
              onPress={() => setshowAll(!showAll)}
              style={styles.buttonShow}
            >
              <Text style={styles.buttonText}>
                {showAll ? "Show less" : "Show more"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#ececec",
    borderRadius: 25,
  },
  buttonShow: {
    flex: 0,
    alignItems: "center",
    backgroundColor: "white",
    width: 80,
    height: 35,
    borderRadius: 20,
    textAlign: "center",
    justifyContent: "center",
    left: 1,
    marginTop: 10,
    bottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
});

export default CategoriesList;
