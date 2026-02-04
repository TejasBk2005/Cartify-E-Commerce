import React , { useState } from "react";
import { View, StyleSheet,ScrollView, TextInput, Text} from "react-native";

import CategoriesList from "../components/Category_Lists";
import { Ionicons } from "@expo/vector-icons";
import CarouselBanner from "../components/Banner_Items";





const HomeScreen = ( {navigation}: any ) => {
  
  return (
    <View style={styles.s1}>
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={28} color="white">
      <TextInput placeholder="Search" onPress={() => navigation.navigate("Search")}  style={styles.searchinput}></TextInput>
      </Ionicons>
      </View>
      <View style={styles.bannerCard}>
        <CarouselBanner/>
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
       flex: 1,
  
    },
     searchContainer:{
      padding: 10,
      backgroundColor: "lightblue"
      
      
    },
     searchinput: {
      backgroundColor: "white",
      borderRadius: 10,
      width: "90%",
      //height: "26.5%",
     },
     bannerCard: {
      height: 150,
      width: 300
     },
     s1:{
      flex: 1,
    },
    
   
      
    
     
});




