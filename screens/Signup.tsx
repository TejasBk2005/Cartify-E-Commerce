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
      <Image
        source={require("../assets/logo.jpg")}
        style={{
          width: 70,
          height: 70,
          bottom: -150,
          borderRadius: 20,
          left: 150,
        }}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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

        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.skip1}
            onPress={() => navigation.navigate("Login")}
          >
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
    padding: 20,
    justifyContent: "center",
    backgroundColor: "lightgray",
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
    marginVertical: 5,
    borderRadius: 25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    left: 170,
    bottom: 620,
    backgroundColor: "white",
    width: "17%",
    height: "3.3%",
    justifyContent: "center",
    borderRadius: 25,
  },
  skip1: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignUp;
