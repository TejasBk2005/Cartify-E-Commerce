import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import Signup from "../screens/Signup";
import Login from "../screens/Login";
import BottomTabNavigator from "./Bottom_Tabs";
import searchItems from "../components/Search_Items";
import ProductDetails from "../components/Product_Details";
import wishlistList from "../components/WishList_Lists";
import CartList from "../screens/CartList";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: "skyblue" },
        }}
      >
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Cartify"
          component={BottomTabNavigator}
          options={({ navigation }) => ({
            title: "Cartify",
            headerRight: () => (
              <View style={{ flexDirection: "row", gap: 20 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Wishlist")}
                >
                  <Ionicons name="heart-outline" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CartList")}
                >
                  <Ionicons name="cart-outline" size={28} color="black" />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen name="Search" component={searchItems} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Wishlist" component={wishlistList} />
        <Stack.Screen name="CartList" component={CartList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
