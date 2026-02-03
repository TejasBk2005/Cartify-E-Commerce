import React , { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput} from "react-native";

import CategoriesList from "../components/Category_Lists";
import { Ionicons } from "@expo/vector-icons";





const HomeScreen = () => {
  const [search , setSearch] = useState("");
  return (
    <View style={styles.s1}>
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={30}  >
      <TextInput  placeholder="Search" value={search} onChangeText={setSearch} style={styles.searchinput}></TextInput>
      </Ionicons>
      </View>
     <ScrollView style={styles.container}>
      <CategoriesList/>
    
    </ScrollView>
   </View>
  
  );
     
  
 };
 export default HomeScreen;

    const styles = StyleSheet.create({
     container:{
       padding: 5,
       flex: 1,
       
       
      
     },
     searchContainer:{
      padding: 20,
      margin: -5,
     
      
     },
     searchinput: {
      backgroundColor: "white",
      borderRadius: 10,
      width: "90%",
      height: "28%",
      
    },
    s1:{
      flex: 1,
    }
   
      
    
     
});




