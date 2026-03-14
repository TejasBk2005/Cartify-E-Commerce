import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

import Account from "../screens/Account";

import HomeScreen from "../screens/Home";
import ShopScreen from "../screens/Shop";
import SearchItems from "../components/Search_API";

//import SearchItems from "../components/Search_API";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const navigation = useNavigation<any>();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? "skyblue" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="shopping"
              size={24}
              color={focused ? "skyblue" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchItems}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              size={24}
              color={focused ? "skyblue" : "gray"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={24}
              color={focused ? "skyblue" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
