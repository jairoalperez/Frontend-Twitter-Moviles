import React, {useState} from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, ScrollView, TextInput, FlatList} from 'react-native'
import { ButtonGroup } from '../components/ButtonGroup'
import { useNavigation } from "@react-navigation/native";

const Configuracion = () => {
    const navigation = useNavigation();

            const dia= 5
            const mes= 2
            const anio= 1985

    const [profiledata, setProfileData] = useState([
        { 
            username:'CR7', 
            seguidores: 70000000,
            seguidos: 70,
            nombre: 'Cristiano Ronaldo',
            bio: 'Soy el mejor jugador, de este equipo perdedor, a todos soy superior, un chico estelar, no se que harian sin mi, si yo me fuera de aki, no verian mas hat tricks, todo seria vulgar.',
            direccion: 'Manchester',
            dia: 5,
            mes: 2,
            anio: 1985
        }
    ])
    ///const fecha = dia+'/'+mes+'/'+anio

   /* const [username, setUsername] = useState('CR7')
    const [seguidores, setSeguidores] = useState(70000000)
    const [seguidos, setSeguidos] = useState(70)
    const [nombre, setNombre] = useState('Cristiano Ronaldo')
    const [bio, setBio] = useState('Soy el mejor jugador, de este equipo perdedor, a todos soy superior, un chico estelar, no se que harian sin mi, si yo me fuera de aki, no verian mas hat tricks, todo seria vulgar.')
    const [direccion, setDireccion] = useState('Manchester')
    const [dia, setDia] = useState(5)
    const [mes, setMes] = useState(2)
    const [anio, setAnio] = useState(1985)
    const fecha = dia+'/'+mes+'/'+anio
    const [birth, setBirth] = useState(fecha)*/

    return (
        <View style={styles.container}>
            <ButtonGroup/>
            <ScrollView contentContainerStyle={styles.containersetting}>

                <Text style={styles.title}>Configuracion</Text>

                <View style={styles.containersetting2}>

                    <Text style={styles.indicacion}>
                        Modificar Username:
                    </Text>
                    <TextInput
                    maxLength={20} 
                    style={styles.tinput}
                    placeholder={profiledata.username}
                    />

                    <Text style={styles.indicacion}>
                        Modificar Nombre:
                    </Text>
                    <TextInput
                    maxLength={20}  
                    style={styles.tinput}
                    placeholder={profiledata.nombre}
                    />

                    <Text style={styles.indicacion}>
                        Modificar Direccion:
                    </Text>
                    <TextInput
                    maxLength={100}
                    style={styles.tinput}
                    placeholder={profiledata.direccion}
                    />

                    <Text style={styles.indicacion}>
                        Modificar Fecha de Nacimiento:
                    </Text>
                    <View style={styles.containerdate}>
                    <TextInput 
                    keyboardType='number-pad'
                    style={styles.tinputdate}
                    placeholder={'dia'}
                    />
                    <TextInput 
                    keyboardType='number-pad'
                    style={styles.tinputdate}
                    placeholder={'mes'}
                    />
                    <TextInput 
                    keyboardType='number-pad'
                    style={styles.tinputdate}
                    placeholder={'año'}
                    />
                    </View>
                    

                    <Text style={styles.indicacion}>
                        Modificar Biografia:
                    </Text>
                    <TextInput
                    maxLength={280}
                    multiline 
                    style={styles.tinput}
                    placeholder={profiledata.bio}
                    />

                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Perfil'), 
                        console.log('Presionaste el boton de Guardar')
                        
                    }}
                    style={styles.button}>
                        <Text style={styles.textbutton}>
                        Guardar
                        </Text>
                    </TouchableOpacity>

                </View>

            
            </ScrollView>
            
        </View>
    )
}
export default Configuracion


const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: "whitesmoke",
  
    },
    containersetting: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "whitesmoke",
        width: 420
    
    },
    containersetting2: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "whitesmoke",
        width: 400

    },
    containerdate: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "whitesmoke",
        width: 400

    },
    title: {
        flex: 1,
        fontSize: 50,
        color: "darkslategrey",
        marginBottom: 50,
        marginTop:30,
        justifyContent: 'flex-start'
    
    },
    indicacion: {
        fontSize: 15,
        color: "black",
        //fontWeight: 'bold',
        padding: 10,
    
    },
    tinput: {
        borderWidth: 2,
        padding: 10,
        borderColor: "black",
        width: 250,
        backgroundColor: "white",
        marginBottom: 10,

    },
    tinputdate: {
        borderWidth: 2,
        padding: 10,
        borderColor: "black",
        width: 60,
        backgroundColor: "white",
        marginBottom: 10,

    },
    button: {
        backgroundColor: "darkslategrey",
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

})