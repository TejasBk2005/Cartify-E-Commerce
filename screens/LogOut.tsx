import React, { useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AuthContext } from "../Context/Context";

const Logout = () => {
  const { LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Logutbtn} onPress={handleLogOut}>
        <Text style={styles.LogoutTxt}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Logutbtn: {
    backgroundColor: "skyblue",
    justifyContent: "center",
    borderRadius: 25,
    width: 80,
    height: 35,
  },
  LogoutTxt: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Logout;
