import * as React from "react"
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigatior} from '@react-navigation/stack'

import Register from "./vistas/Register"
import Login from "./vistas/Login"

const Stack = createStackNavigatior();

const Navigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteNam="Home">
                <Stack.Screen name="Home" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation