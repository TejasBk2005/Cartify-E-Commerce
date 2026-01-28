import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Account from '../screens/Account';
import HomeScreen from "../screens/Home";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ focused }) => <Ionicons name="home" size={24} color={focused ? 'skyblue' : 'gray'} /> }} />
            <Tab.Screen name="Account" component={Account} options={{ tabBarIcon: ({ focused }) => <Ionicons name="person" size={24} color={focused ? 'skyblue' : 'gray'} /> }} />
        </Tab.Navigator>
    );
}
export default BottomTabNavigator;