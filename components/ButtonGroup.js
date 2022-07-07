import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from "@react-navigation/native";

export const ButtonGroup = ({buttons, doSomethingAfterClick}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Inicio'), 
        console.log('Presionaste el boton de Inicio')
      }}
      style={styles.button}>
        <Text style={styles.textbutton}>Inicio</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Buscar'), 
        console.log('Presionaste el boton de Buscar')
      }}
      style={styles.button}>
        <Text style={styles.textbutton}>Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Perfil'), 
        console.log('Presionaste el boton de Perfil')
      }}
      style={styles.button}>
        <Text style={styles.textbutton}>Perfil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Home'), 
        console.log('Presionaste el boton de LogOut')
      }}
      style={styles.button}>
        <Text style={styles.textbutton}>LogOut</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({

    container: {
        //flex: 1,
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'darkslategrey',
        
    },
    textbutton: {
        fontSize: 20,
        color: "white",
        marginTop: 50

      },

})