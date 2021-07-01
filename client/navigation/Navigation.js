import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../Screens/Dash/Dashbord';
import Landing from '../Screens/Landing/Landing';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function stackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Landing'
                component={Landing}
                options={{ title: 'Landing' }}
            />
            <Stack.Screen
                name='Dashboard'
                component={Dashboard}
                options={{ title: 'Browse' }}
            />
        </Stack.Navigator>
    )
}

function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={stackNavigator}
                />
            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default AppNavigator;