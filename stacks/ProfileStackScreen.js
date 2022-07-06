import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from "react-native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../vistas/ProfileScreen";

const ProfileStackScreen = () => {
    const ProfileStack = createNativeStackNavigator();
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={ProfileScreen}/>
        </ProfileStack.Navigator>
    )
} 

export default ProfileStackScreen