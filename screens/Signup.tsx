import { Ionicons } from "@expo/vector-icons";
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { AuthContext } from "../Context/Context";

const SignUp = ({ navigation }: any) => {
  const { SignUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const EmailPattren = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PasswordPattren = /^(?=.*[0-9]).{6,}$/;

  const handleSignup = () => {
    if (!name || !email || !password || !confirmedPassword) {
      alert("All fields are required");
      return;
    }
    if (!EmailPattren.test(email)) {
      alert("Enter valid email");
      return;
    }
    if (!PasswordPattren.test(password)) {
      alert("Password must be 6 character and contains 1 number");
      return;
    }
    if (password !== confirmedPassword) {
      alert("Password do not match");
      return;
    }
    SignUp();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.skip1}
          onPress={() => navigation.navigate("Cartify")}
        >
          Skip
        </Text>
        <Ionicons
          name="play-skip-forward-outline"
          size={15}
          style={{ justifyContent: "flex-end", marginLeft: 5 }}
        />
      </TouchableOpacity>
      <Image source={require("../assets/logo.jpg")} style={styles.img} />

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

        <TouchableOpacity style={styles.input1} onPress={handleSignup}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
          >
            SignUp
          </Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16 }}>
          Do you have an account?
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
  img: {
    width: 120,
    height: 120,
    // bottom: -50,
    borderRadius: 50,
    // left: 120,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
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
    flexDirection: "row",
  },
  skip1: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default SignUp;
