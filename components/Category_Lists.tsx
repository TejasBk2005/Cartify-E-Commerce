import React ,{useState , useEffect }from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";

import categoriesItems from "./Category_Items";
import { ScrollView } from "react-native";



const homeURL = 'https://dummyjson.com/products/categories'
const ITEMS_PER_LOAD = 6;

const CategoriesList = () => {
    const [data , setData] = useState([]);
    const [isLoading , setLoading] = useState(true);
    const [visibleItem , setvisibleItem] = useState(ITEMS_PER_LOAD);
    const totalItems = homeURL.length;
    

   

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

        const handleShowMore = () => {
          setvisibleItem(prevVisibleItems =>
            Math.min(prevVisibleItems + ITEMS_PER_LOAD + totalItems )
          )
        }

          return (
            <View style={styles.card}>
                {isLoading ? (
                    <ActivityIndicator />
                ):(
                  <View style={styles.card}>
                    <FlatList 
                    data = {data}
                    keyExtractor={(data,index) => index.toString()} 
                    renderItem = {categoriesItems}
                    numColumns={3}
                    
                    />
                    </View>
                )}
            </View>
          
          );
        }
        const styles = StyleSheet.create({
     card:{
        flex: 1,
     }
     
});



export default CategoriesList;
