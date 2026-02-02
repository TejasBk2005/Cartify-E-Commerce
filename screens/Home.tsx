import React , { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput} from "react-native";

import CategoriesList from "../components/Category_Lists";
import { Ionicons } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";




const HomeScreen = () => {
  const [search , setSearch] = useState("");
  return (
    <View>
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
   
      
    
     
});




