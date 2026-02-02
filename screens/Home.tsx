import React ,{useState , useEffect }from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";

import categoriesItems from "../components/HomeItems";


const homeURL = 'https://fakestoreapiserver.reactbd.org/api/categories'

const CategoriesList = () => {
    const [data , setData] = useState([]);
    const [isLoading , setLoading] = useState(true);

    const getCategories = async () => {
       try {
         const response = await fetch(homeURL);
         const data = await response.json();
         setData(data.data);
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
            <View style={styles.card}>
                {isLoading ? (
                    <ActivityIndicator />
                ):(
                    <FlatList 
                    data = {data}
                    keyExtractor={(data,index) => index.toString()} 
                    renderItem = {categoriesItems}
                    numColumns={2}

                
                    />
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
