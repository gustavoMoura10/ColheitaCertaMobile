import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login';

const Stack = createStackNavigator();

//ROTAS EM ESTILO DE DASH
export default function DashRoutes() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}