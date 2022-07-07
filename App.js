import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from "react-native"
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './vistas/Home'
import Login from './vistas/Login'
import Register from "./vistas/Register"
import Perfil from "./vistas/Perfil"
import Buscar from './vistas/Buscar'
import Inicio from './vistas/Inicio'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register}/>
          <Stack.Screen name="Buscar" component={Buscar}/>
          <Stack.Screen name="Inicio" component={Inicio}/>
          <Stack.Screen name="Perfil" component={Perfil}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}