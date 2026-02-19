import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const SignUp = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.skip1}
          onPress={() => navigation.navigate("Cartify")}
        >
          Skip ▶
        </Text>
      </TouchableOpacity>
      <Image
        source={require("../assets/logo.jpg")}
        style={{
          width: 120,
          height: 120,
          // bottom: -50,
          borderRadius: 50,
          // left: 120,
          alignItems: "center",
          alignSelf: "center",
          marginTop: 20,
        }}
      />

      <View
        style={{
          flex: 1,
          marginTop: 20,
          // justifyContent: "center", alignItems: "center"
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmedPassword}
          onChangeText={setConfirmedPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.input1}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            SignUp
          </Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16 }}>
          {" "}
          Do you have an account?{" "}
          <Text
            style={{ color: "blue", textDecorationLine: "underline" }}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    backgroundColor: "white",
    color: "white",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  input: {
    borderWidth: 2,
    borderColor: "gray",
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
    color: "black",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  input1: {
    backgroundColor: "skyblue",
    padding: 10,
    marginVertical: 15,
    borderRadius: 25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    // left: 150,
    // bottom: 550,
    backgroundColor: "lightgray",
    // width: "17%",
    // height: "3.3%",
    justifyContent: "flex-end",
    borderRadius: 25,
    alignContent: "flex-end",
    alignSelf: "flex-end",
    top: 10,
    padding: 10,
  },
  skip1: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignUp;
