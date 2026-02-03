import React, { useState} from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const searchItems = () => {
      const [search , setSearch] = useState("");
  return(
      <View style={styles.s1}>
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={28} >
      <TextInput  placeholder="Search" value={search} onChangeText={setSearch} style={styles.searchinput}></TextInput>
      </Ionicons>
      </View>
      </View>
  )
}

export default searchItems;
  const styles = StyleSheet.create({
     container:{
       padding: 1,
       flex: 1,
       
       
      
     },
     searchContainer:{
      padding: 10,
      marginLeft: -5
     
      
     },
     searchinput: {
      backgroundColor: "white",
      borderRadius: 10,
      width: "90%",
      height: "24%",
      
    },
    s1:{
      flex: 1,
    }
   
      
    
     
});