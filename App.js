import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from "react-native"
import logo from './assets/logo.png'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './vistas/Login'
import Register from "./vistas/Register";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Twitter AJC
      </Text>

      <Image 
      source={logo}
      style={styles.image}
      />

      <TouchableOpacity
      onPress={() => Alert.alert('Presionaste el boton de iniciar sesion')}
      style={styles.buttonlogin}>
        <Text style={styles.textbuttonl}>
          Iniciar Sesion
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => Alert.alert('Presionaste el boton de registrarse')}
      style={styles.buttonregister}>
        <Text style={styles.textbuttonr}>
          Registrarse
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkslategrey",

  },
  title: {
    fontSize: 50,
    color: "white",
    marginBottom: 50

  },
  image: {
    height: 168, 
    width: 243,

  },
  buttonlogin: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 125,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    height: 50, 
    width: 150,
  
  },
  buttonregister: {
    backgroundColor: "dimgray",
    padding: 10,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    height: 50, 
    width: 150,
  
  },
  textbuttonl: {
    fontSize: 20,
    color: "darkslategrey",
    
  },

  textbuttonr: {
    fontSize: 20,
    color: "white",
    
  },

});


export default App;