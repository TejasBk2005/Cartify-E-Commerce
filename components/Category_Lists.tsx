import React ,{useState , useEffect }from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity , Text} from "react-native";

import categoriesItems from "./Category_Items";



const homeURL = 'https://dummyjson.com/products/categories'

const CategoriesList = () => {
    const [data , setData] = useState([]);
    const [isLoading , setLoading] = useState(true);
    const [showAll , setshowAll] = useState(false);
    
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


          const visibleData = showAll ? data:data.slice(0 , 6);

       

          return (
            <View style={styles.card}>
                {isLoading ? (
                    <ActivityIndicator />
                ):(
                  <View style={styles.card}>
                    <FlatList 
                    data = {visibleData}
                    keyExtractor={(data,index) => index.toString()} 
                    renderItem = {categoriesItems}
                    numColumns={3}
                    showsVerticalScrollIndicator = {false}
                  
                  />
                   
                    {data.length > 6 && (
                      <TouchableOpacity  onPress={() => setshowAll(!showAll)} style={styles.buttonShow}>
                        <Text style={styles.buttonText}>{showAll ? "Show less" : "Show more"}</Text>
                      </TouchableOpacity>
                    )
                     }
                    </View>
                )}
            </View>
          
          );
        }
        const styles = StyleSheet.create({
     card:{
        flex: 1,
      },
      buttonShow: {
        alignItems: "center",
        backgroundColor: "skyblue",
        width: 80,
        height: 35,
        borderRadius: 25,
        textAlign: "center",
        justifyContent: "center",
        left: 170
      },
      buttonText: {
        fontSize: 16,
        color: "black",
        fontWeight: "600"
      }
     
});



export default CategoriesList;
