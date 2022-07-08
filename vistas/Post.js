import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import { ButtonGroup } from '../components/ButtonGroup'
import { useNavigation } from "@react-navigation/native";

const Post = () =>{
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ButtonGroup/>
            <ScrollView contentContainerStyle={styles.containerpost}>

                <Text style={styles.title}>Publicar Tweet</Text>

                <View style={styles.containerpost2}>

                    <TextInput
                    multiline
                    maxLength={240} 
                    style={styles.tinput}
                    placeholder='Escribir Tweet (Max 240 Caracteres)'
                    />

                    <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Inicio'), 
                        console.log('Presionaste el boton de Publicar')
                        
                    }}
                    style={styles.button}>
                        <Text style={styles.textbutton}>
                        Publicar
                        </Text>
                    </TouchableOpacity>

                </View>

            
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
          containerpost: {
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: "whitesmoke",
              width: 420
          
          },
          containerpost2: {
              justifyContent: 'flex-start',
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
        tinput: {
            borderWidth: 2,
            padding: 10,
            borderColor: "black",
            width: 350,
            height: 350,
            backgroundColor: "white",
            marginBottom: 10,
            fontSize: 20,
            borderRadius: 10,
    
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

export default Post