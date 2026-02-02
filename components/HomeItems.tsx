import React from "react";
import { View, Text, StyleSheet} from "react-native";


const categoriesItems = ({ item }:{ item : any }) => {
   return (
    <View style = {styles.card}>
        <Text style={styles.catname}>{item.name}</Text>
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
    alignContent: "center"
    
},
catname: {
    textAlign: "center",
},
id:{

}

});

export default categoriesItems;

