import React from 'react';
import {
  StatusBar,
  Text,
  SafeAreaView,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

const Router = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen 
                    name="Details" 
                    component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
