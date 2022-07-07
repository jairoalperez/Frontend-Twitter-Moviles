import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import { ButtonGroup } from '../components/ButtonGroup'

const Perfil = () => {

  return (
    <View style={styles.container}>
      <ButtonGroup/>
      <Text style={styles.title}>Perfil</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",

  },
  title: {
    flex: 1,
    fontSize: 50,
    color: "darkslategrey",
    marginBottom: 50

  },

})

export default Perfil