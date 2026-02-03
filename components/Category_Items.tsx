import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import categoryIcons from "./Category_Icons";


const categoriesItems = ({ item }:{ item : any }) => {
   return (
    <View style = {styles.card}>
        {categoryIcons[item.slug as keyof typeof categoryIcons] || (
      <MaterialIcons name="category" size={40}  color="black"  />
    )}
       <Text style={styles.name}>{item.name}</Text>
      </View>
      

         
 
    
   );
};

const styles = StyleSheet.create({
  
card: {
    //flexDirection:"column",
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 10 , height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 10,
    borderRadius: 10,
    height: 55 ,
    width: 55,
    alignItems: "center",
    justifyContent: "center"
    
},

name: {
   padding: 1,
   textAlign: "auto",
   justifyContent: "space-between",
   alignItems: "center",
   fontSize: 12,
},


});

export default categoriesItems;

