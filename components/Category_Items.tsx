import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";


const categoriesItems = ({ item }:{ item : any }) => {
   return (
    <View style = {styles.card}>
         
        <Text style={styles.brand}>{item.name}</Text>
    </View>
    
   );
};

const styles = StyleSheet.create({
  
card: {
    flexDirection:"row",
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    borderRadius: 30,
    height: 100,
    width: 100
    
},
brand: {
    flex:1,
    textAlign: "center",
    padding: -10,
    margin: 20,
},

});

export default categoriesItems;

