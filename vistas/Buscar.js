import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, ScrollView, TextInput} from 'react-native'
import React from 'react'
import { ButtonGroup } from '../components/ButtonGroup'

const Buscar = () => {

  return (
    <View style={styles.container}>
            <ButtonGroup/>
            <ScrollView contentContainerStyle={styles.containerinicio}>

                <TextInput
                  style={styles.buscar}
                  placeholder='@username'
                />
      
            </ScrollView>
            
        </View>
    
  )
}

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
  buscar: {
      flex: 1,
      fontSize: 20,
      color: "black",
      marginTop:30,
      justifyContent: 'flex-start',
      borderWidth: 2,
      padding: 10,
      borderColor: "gray",
      width: 350,
      backgroundColor: "white",
      marginBottom: 10,
      borderRadius: 40
  
  },

})

export default Buscar