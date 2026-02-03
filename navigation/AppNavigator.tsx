import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from '../screens/Signup';
import Login from '../screens/Login';
import BottomTabNavigator from './Bottom_Tabs';
import { StackScreen } from 'react-native-screens';
import searchItems from '../components/Search_Items';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>
        
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cartify"  component={BottomTabNavigator}/>
        <Stack.Screen name="Search" component={searchItems}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;