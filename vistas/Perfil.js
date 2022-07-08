import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, ScrollView} from 'react-native'
import React, {useState} from 'react'
import { ButtonGroup } from '../components/ButtonGroup'
import { useNavigation } from "@react-navigation/native";
import Tweet from '../components/Tweet';

const Perfil = () => {
  const navigation = useNavigation();

    const [username, setUsername] = useState('CR7')
    const [seguidores, setSeguidores] = useState(70000000)
    const [seguidos, setSeguidos] = useState(70)
    const [nombre, setNombre] = useState('Cristiano Ronaldo')
    const [bio, setBio] = useState('Soy el mejor jugador, de este equipo perdedor, a todos soy superior, un chico estelar, no se que harian sin mi, si yo me fuera de aki, no verian mas hat tricks, todo seria vulgar.')
    const [direccion, setDireccion] = useState('Manchester')
    const [fecha, setFecha] = useState('05/02/1985')
    
    //Las vistas
  return (
    
    <View style={styles.container}>
    <ButtonGroup/>  

      <ScrollView contentContainerStyle={styles.containerusername}>

        <Text style={styles.username}>{username}</Text>

          <View style={styles.containerf}>
            <Text style={styles.follows}>Seguidores: {seguidores}</Text>
            <Text style={styles.follows}>Seguidos: {seguidos}</Text>
          </View>

          <View style={styles.containerbio}>
            <Text style={styles.nombre}>Cristiano Ronaldo</Text>
            <Text style={styles.bio}>{bio}</Text>
            <Text style={styles.datosbio}>{fecha} {'\n'}{direccion}</Text>
          </View>

          <View style={styles.containerbotones}>
            <TouchableOpacity
            onPress={() => {
            navigation.navigate('Configuracion'), 
            console.log('Presionaste el boton de Configuracion')
            }}
            style={styles.button}>
              <Text style={styles.textbutton}>
                Configuracion
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.tweets}>
            Tweets
          </Text>

          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>
          <Tweet/>

      </ScrollView>
    </View>
    
  )
}

//los estilos
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "whitesmoke",

  },
  containerusername: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "whitesmoke",
    width: 420

  },
  containerf: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "whitesmoke",
    marginBottom: 20,

  },
  containerbio: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: "whitesmoke",
    textAlign: 'left',
    padding: 10,
    marginBottom: 5,

  },
  containerbotones: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "whitesmoke",
    marginBottom: 20
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
    marginBottom: 20,
    fontWeight: 'bold',
    padding: 10,

  },
  bio: {
    fontSize: 20,
    color: "white",
    padding: 10,
    backgroundColor: 'darkslategrey'
  },
  datosbio: {
    fontSize: 15,
    color: "black",
    padding: 10,
    backgroundColor: 'whitesmoke'
  },

  follows: {
    fontSize: 15,
    color: "black",
    marginBottom: 15,
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
    
},
  tweets: {
    marginTop: 30,
    fontSize: 30,
    color: "black",
    marginBottom: 10,
    fontWeight: 'bold'

  },
  

})

export default Perfil