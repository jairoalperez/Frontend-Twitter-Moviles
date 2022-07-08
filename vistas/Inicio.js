import React, {useState} from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, ScrollView} from 'react-native'
import { ButtonGroup } from '../components/ButtonGroup'
import Tweet from "../components/Tweet";
import { useNavigation } from "@react-navigation/native";

const Inicio = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ButtonGroup/>
            <ScrollView contentContainerStyle={styles.containerinicio}>

                <Text style={styles.title}>Inicio</Text>

                <TouchableOpacity
                    onPress={() => {
                    navigation.navigate('Post'), 
                    console.log('Presionaste el boton de Post')
                    }}
                    style={styles.button}>
                    <Text style={styles.textbutton}>
                        Hacer un Tweet
                    </Text>
                </TouchableOpacity>

                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
      
            </ScrollView>
            
        </View>
    )
}
export default Inicio


const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: "whitesmoke",
  
    },
    containerinicio: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "whitesmoke",
        width: 420
    
    },
    title: {
        flex: 1,
        fontSize: 50,
        color: "darkslategrey",
        marginBottom: 20,
        marginTop:30,
        justifyContent: 'flex-start'
    
    },
    button: {
        backgroundColor: "dimgray",
        padding: 10,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        height: 50, 
        width: 200,
        marginBottom: 40,
        
    },
    textbutton: {
        fontSize: 20,
        color: "white",
    
      },

})