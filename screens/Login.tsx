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
        source={require("../assets/logo.jpg")}
        style={{
          width: 120,
          height: 120,
          //  bottom: -250,
          borderRadius: 50,
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 60,
        }}
      />
      <View
        style={{
          flex: 1,
          marginTop: 100,
          //margin: 5, //justifyContent: "center", alignItems: "center"
        }}
      >
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.login}>
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
            Skip▶
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    color: "white",
  },
  input: {
    height: 60,
    borderColor: "gray",
    borderWidth: 2,
    width: "100%",
    marginVertical: 5,
    paddingLeft: 10,
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
  },

  login: {
    backgroundColor: "skyblue",
    padding: 10,
    marginVertical: 15,
    borderRadius: 25,
    width: "100%",
    // marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    //left: 170,
    // bottom: 550,
    backgroundColor: "lightgray",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    alignContent: "flex-end",
    borderRadius: 25,
    // width: 65,
    //height: "3.3%",
    bottom: 490,
    padding: 10,
  },
  skip1: {
    textAlign: "center",
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
