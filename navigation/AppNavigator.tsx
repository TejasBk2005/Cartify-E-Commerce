import React, { useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import Signup from "../screens/Signup";
import Login from "../screens/Login";
import BottomTabNavigator from "./Bottom_Tabs";
import ProductDetails from "../components/Product_DetailsAPI";
import wishlistList from "../components/WishList_Display";
import CartDisplay from "../components/Cart_display";
import searchItems from "../components/Search_Items";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

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
            headerStyle: {
              backgroundColor: "skyblue",
            },

            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
            headerBackVisible: false,

            headerRight: () => (
              <View style={{ flexDirection: "row", gap: 20 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Wishlist")}
                >
                  <Ionicons name="heart-outline" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Carts")}>
                  <Ionicons name="cart-outline" size={28} color="black" />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen name="Search" component={searchItems} />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={{ flexDirection: "row", gap: 20 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Wishlist")}
                >
                  <Ionicons name="heart-outline" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Carts")}>
                  <Ionicons
                    name="cart-outline"
                    size={28}
                    color="black"
                  ></Ionicons>
                </TouchableOpacity>
              </View>
            ),
          })}
        />

        <Stack.Screen name="Wishlist" component={wishlistList} />
        <Stack.Screen name="Carts" component={CartDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
