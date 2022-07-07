import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import { ButtonGroup } from '../components/ButtonGroup'

const Perfil = () => {

  return (
    
    <View style={styles.container}>
    <ButtonGroup/>  

      <View style={styles.containerusername}>

        <Text style={styles.username}>USERNAME</Text>
        

          <View style={styles.containerf}>

            <Text style={styles.follows}>Seguidores: xxx            </Text>
            <Text style={styles.follows}>Seguidos: xxx</Text>

          </View>

          <View style={styles.containerbio}>

            <Text style={styles.nombre}>Nombre Apellido</Text>
            <Text style={styles.bio}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Text>

          </View>

          <View style={styles.containerbotones}>

          <TouchableOpacity
          onPress={() => {
          //navigation.navigate('Register'), 
          console.log('Presionaste el boton de Tweets')
          }}
          style={styles.button}>
            <Text style={styles.textbutton}>
              Tweets
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => {
          //navigation.navigate('Register'), 
          console.log('Presionaste el boton de Tweets')
          }}
          style={styles.button}>
            <Text style={styles.textbutton}>
              Configuracion
            </Text>
          </TouchableOpacity>

          </View>

      </View>

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
  containerusername: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "whitesmoke",

  },
  containerf: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: "whitesmoke",

  },
  containerbio: {
    //flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: "whitesmoke",
    textAlign: 'left'
    

  },
  containerbotones: {
    //flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "whitesmoke",

  },

  username: {
    marginTop: 20,
    fontSize: 50,
    color: "black",
    marginBottom: 10,
    fontWeight: 'bold'

  },
  nombre: {
    fontSize: 25,
    color: "black",
    marginBottom: 30,
    fontWeight: 'bold',
    padding: 10,

  },
  bio: {
    fontSize: 25,
    color: "white",
    marginBottom: 30,
    padding: 10,
    backgroundColor: 'darkslategrey'
  },

  follows: {
    fontSize: 15,
    color: "black",
    marginBottom: 50,
    fontWeight: 'bold'

  },
  textbutton: {
    fontSize: 20,
    color: "white",

  },
  button: {
    backgroundColor: "darkslategrey",
    padding: 10,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    height: 50, 
    width: 150,
    marginTop: 20
    
},
  

})

export default Perfil