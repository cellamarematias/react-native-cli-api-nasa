import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";
import CompleteImage from "../views/Image/Image";

const Stack = createNativeStackNavigator();
const routesScreenDefaultOptions = {
    headerStyle: {
        backgroundColor: 'black',
        color: '#ffff'
    },
    headerTintColor: '#ffff', // Cambia el color del texto de la barra de navegación
    headerTitleStyle: {
        color: '#ffff'
    }
}

const Routes = () => (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home"
                component={Home}
                options={routesScreenDefaultOptions}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={routesScreenDefaultOptions}
            />
            <Stack.Screen
                name="Image"
                component={CompleteImage}
                options={routesScreenDefaultOptions}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes;