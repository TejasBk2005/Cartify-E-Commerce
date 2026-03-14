import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import Logout from "./LogOut";

const Account = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);
   const loadUser = async () => {
    const data = await AsyncStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  };
  return (
     <View style={styles.container}>

      <Ionicons name="person-circle" size={120} color="gray" />

      <Text style={styles.title}>Profile</Text>

     

        <Logout />
      </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    color: "gray",
  },

  value: {
    fontSize: 18,
    marginBottom: 15,
  },

});

export default Account;
