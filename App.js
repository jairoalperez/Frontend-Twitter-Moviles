import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from "react-native"
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './vistas/Home'
import Login from './vistas/Login'
import Register from "./vistas/Register";

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}