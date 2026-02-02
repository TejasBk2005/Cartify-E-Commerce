import React from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from '../screens/Signup';
import Login from '../screens/Login';
import BottomTabNavigator from './Bottom_Tabs';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="BottomTab"  component={BottomTabNavigator}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;