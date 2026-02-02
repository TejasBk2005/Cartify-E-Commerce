import React ,{useState , useEffect }from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";

import categoriesItems from "./Category_Items";
import { ScrollView } from "react-native";



const homeURL = 'https://dummyjson.com/products/categories'

const CategoriesList = () => {
    const [data , setData] = useState([]);
    const [isLoading , setLoading] = useState(true);

    const getCategories = async () => {
       try {
         const response = await fetch(homeURL);
         const data = await response.json();
         setData(data);
         }catch (error){
            console.log("Error fetching categoires", error);
          } finally {
            setLoading(false);
          }
    };
          useEffect(() => {
            getCategories();
          },[]);
          return (
            <ScrollView style={styles.card}>
                {isLoading ? (
                    <ActivityIndicator />
                ):(
                    <FlatList 
                    data = {data}
                    keyExtractor={(data,index) => index.toString()} 
                    renderItem = {categoriesItems}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    />
                )}
            </ScrollView>
          
          );
        }
        const styles = StyleSheet.create({
     card:{
        flex: 0,
     }
     
});



export default CategoriesList;
