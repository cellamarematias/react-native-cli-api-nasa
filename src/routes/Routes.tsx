import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteStackParam } from "../types";
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";

const Stack = createNativeStackNavigator();

const Routes = () => (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes;