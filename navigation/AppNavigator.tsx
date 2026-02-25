import React, { useEffect, useMemo, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, TouchableOpacity } from "react-native";

import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Signup from "../screens/Signup";
import Login from "../screens/Login";
import BottomTabNavigator from "./Bottom_Tabs";
import ProductDetails from "../components/Product_DetailsAPI";
import wishlistList from "../components/WishList_Display";
import CartDisplay from "../components/Cart_display";
import searchItems from "../components/Search_Items";
import { AuthContext } from "../components/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(
    () => ({
      Signup: async () => {
        let token = "cartify";
        await AsyncStorage.setItem("userToken", token);
        setUserToken(token);
      },
      Login: async () => {
        let token = "cartify";
        await AsyncStorage.setItem("userToken", token);
        setUserToken(token);
      },
    }),
    [],
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let token = await AsyncStorage.getItem("userToken");
      setUserToken(token);
      setIsLoading(false);
    };
    bootstrapAsync();
  }, []);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: { backgroundColor: "skyblue" },
          }}
        >
          {userToken === null ? (
            <>
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Login" component={Login} />
            </>
          ) : (
            <>
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
                        <Ionicons
                          name="heart-outline"
                          size={28}
                          color="black"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Carts")}
                      >
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
                        <Ionicons
                          name="heart-outline"
                          size={28}
                          color="black"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Carts")}
                      >
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
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default AppNavigator;
