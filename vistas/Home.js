import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from "react-native";
import logo from '../assets/logo.png'


const Home = ({navigation}) => {
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
      onPress={() => {
        navigation.navigate('Login'), 
        console.log('Presionaste el boton de login')
      }}
      style={styles.buttonlogin}>
        <Text style={styles.textbuttonl}>
          Iniciar Sesion
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => {
        navigation.navigate('Register'), 
        console.log('Presionaste el boton de Register')
      }}
      style={styles.buttonregister}>
        <Text style={styles.textbuttonr}>
          Registrarse
        </Text>
      </TouchableOpacity>
        </View>
    )
};

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

export default Home