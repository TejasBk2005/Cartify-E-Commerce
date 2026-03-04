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
import wishlistList from "../screens/WishList_Display";
import CartDisplay from "../screens/Cart_display";
import SearchItems from "../components/Search_API";
import { AuthContext } from "../Context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState<string | null>(null);

  const authContext = useMemo(
    () => ({
      SignUp: async () => {
        let token = "cartifytoken";
        await AsyncStorage.setItem("userToken", token);
        setUserToken(token);
      },

      LogIn: async () => {
        let token = "cartifytoken";
        await AsyncStorage.setItem("userToken", token);
        setUserToken(token);
      },
      LogOut: async () => {
        await AsyncStorage.removeItem("userToken");
        setUserToken(null);
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
              <Stack.Screen name="Search" component={SearchItems} />
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
