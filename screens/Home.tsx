import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput, Text } from "react-native";

import CategoriesList from "../components/Category_Lists";
import { Ionicons } from "@expo/vector-icons";
import CarouselBanner from "../components/Banner_Items";

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.s1}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          onPress={() => navigation.navigate("Search")}
          style={styles.searchinput}
        >
          <Ionicons
            name="search"
            size={28}
            color="black"
            style={{ position: "absolute", left: 10, top: 8 }}
          />
        </TextInput>
      </View>
      <View style={styles.bannerCard}>
        <CarouselBanner />
      </View>
      <ScrollView style={styles.iconsList}>
        <CategoriesList />
      </ScrollView>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  searchContainer: {
    padding: 10,
    backgroundColor: "lightblue",
  },
  searchinput: {
    backgroundColor: "white",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    //height: "26.5%",
  },
  bannerCard: {
    flex: 0,
    height: 160,
    width: 360,
    left: -10,
    margin: 15,
    marginBottom: 60,
  },
  s1: {
    flex: 1,
    backgroundColor: "white",
  },
  iconsList: {
    margin: 10,
    borderRadius: 25,
  },
});
