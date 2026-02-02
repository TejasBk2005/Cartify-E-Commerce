import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';



import CartList from "../screens/CartList";
import Account from "../screens/Account";


import HomeScreen from "../screens/Home";
import ShopScreen from "../screens/Shop";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
            <Tab.Navigator >
             <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => <Ionicons name="home" size={24} color={focused ? 'skyblue' : 'gray'} /> , title: "HOME", 
                     headerStyle: {
                          backgroundColor: "lightblue"
                         },
                       headerTitleStyle: {
                       fontWeight: "bold", 
                       color: 'black', }}}/>
             <Tab.Screen name="Shop" component={ShopScreen} options={{ tabBarIcon: ({ focused }) => <AntDesign name="shopping" size={24} color={focused ? 'skyblue' : 'gray'}/> , title: "Shop", 
        headerStyle: {
            backgroundColor: "lightblue"
        },
        headerTitleStyle: {
          fontWeight: "bold", 
          color: 'black' }}} />
             <Tab.Screen name="Cart" component={CartList} options={{ tabBarIcon: ({ focused }) => <Ionicons name="cart" size={24} color={focused ? 'skyblue' : 'gray'} /> , title: "Cart", 
                     headerStyle: {
                          backgroundColor: "lightblue"
                         },
                       headerTitleStyle: {
                       fontWeight: "bold", 
                       color: 'black' }}}/> 
            <Tab.Screen name="Account" component={Account} options={{ tabBarIcon: ({ focused }) => <Ionicons name="person" size={24} color={focused ? 'skyblue' : 'gray'} /> , title: "Profile", 
                     headerStyle: {
                          backgroundColor: "lightblue"
                         },
                       headerTitleStyle: {
                       fontWeight: "bold", 
                       color: 'black' }}}/> 
            </Tab.Navigator>
    );
}
export default BottomTabNavigator;