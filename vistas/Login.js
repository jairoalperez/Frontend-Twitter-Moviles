import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, TextInput} from "react-native";

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Iniciar Sesion
            </Text>

            <TextInput
            style={styles.tinputce} 
            keyboardType='email-address'
            placeholder='Correo Electronico'
            placeholderTextColor= 'gray'/>

            <TextInput
            secureTextEntry={true} 
            style={styles.tinputp}
            keyboardType='default'
            placeholder='Contraseña'
            placeholderTextColor= 'gray'/>

            <TouchableOpacity
                onPress={() => { 
                    console.log('Presionaste el boton de login')
                }}
                style={styles.button}>
                    <Text style={styles.textbutton}>
                    Iniciar Sesion
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
      tinputce: {
        height: 40,
        marginTop: 80,
        borderWidth: 1,
        padding: 10,
        borderColor: "black",
        height: 50, 
        width: 250,
        borderRadius: 40,
        backgroundColor: "white",

      },
      tinputp: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "black",
        height: 50, 
        width: 250,
        borderRadius: 40,
        backgroundColor: "white"
        
      },
      button: {
        backgroundColor: "dimgray",
        padding: 10,
        marginTop: 30,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        height: 50, 
        width: 150,
      
      },
      textbutton: {
        fontSize: 20,
        color: "white",
        
      },

});

export default Login

