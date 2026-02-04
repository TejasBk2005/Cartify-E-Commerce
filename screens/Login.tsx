import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/CARTIFY2.png")}
        style={{ width: 70, height: 70, bottom: -250, borderRadius: 20 }}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.input1}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.skip1}
            onPress={() => navigation.navigate("Cartify")}
          >
            {" "}
            Skip▶{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
  },
  input: {
    height: 60,
    borderColor: "gray",
    borderWidth: 2,
    width: 350,
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 15,
  },

  input1: {
    backgroundColor: "skyblue",
    padding: 10,
    marginVertical: 5,
    borderRadius: 25,
    width: 350,
    marginTop: 20,
  },
  button: {
    left: 170,
    bottom: 550,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 25,
    width: 65,
    height: "3.3%",
  },
  skip1: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
