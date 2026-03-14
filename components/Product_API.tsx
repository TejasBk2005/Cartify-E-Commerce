import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import categoryname from "../components/Category_Items"


import ProductItem from "../screens/Product_ListDisplay";

const PRODUCT_URL = "https://dummyjson.com/products";
//const CATEGORY_URL = "https://dummyjson.com/products/category/"

const ProductList = ({ route } : any ) => {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  console.log("error",route);
  
  const categoryname = route?.params?.categoryname;
  

 //const categoryname = "smartphones"
  useEffect (() => {
    if (categoryname){
  getCategoryProduct(categoryname);
  }
else{

    getProducts();}
  }, [categoryname]);

  const getCategoryProduct = async ( categoryname : string ) => {
    try{
      setLoading(true)
      const response = await fetch( `https://dummyjson.com/products/category/${categoryname}`);
      const data = await response.json();
      console.log("data", data)
      setData(data.products);
    } catch (e) {
      console.log("error", e);
    } finally{
      setLoading(false);

    }
  }
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(PRODUCT_URL);
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
    fetch(PRODUCT_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
        setRefreshing(false);
      })
      .catch((error) => {
        console.log(error);
        setRefreshing(false);
      });
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
          refreshing={refreshing}
          onRefresh={onRefresh}
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
