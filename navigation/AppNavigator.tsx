import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signup from "../screens/Signup";
import Login from "../screens/Login";
import BottomTabNavigator from "./Bottom_Tabs";
import searchItems from "../components/Search_Items";
import ProductDetails from "../components/Product_Details";

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
        <Stack.Screen name="Cartify" component={BottomTabNavigator} />
        <Stack.Screen name="Search" component={searchItems} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
