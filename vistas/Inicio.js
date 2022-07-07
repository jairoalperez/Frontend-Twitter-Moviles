import React, {useState} from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, ScrollView} from 'react-native'
import { ButtonGroup } from '../components/ButtonGroup'

const Inicio = () => {
    return (
        <View style={styles.container}>
            <ButtonGroup/>
            <ScrollView contentContainerStyle={styles.containerinicio}>

                <Text style={styles.title}>Inicio</Text>
      
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
        marginBottom: 50,
        marginTop:30,
        justifyContent: 'flex-start'
    
    },

})