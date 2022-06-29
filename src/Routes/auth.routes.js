import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import Login from '../pages/login';
import Home from '../pages/home';

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="inicio"
    >
      <Screen
        name="Login"
        component={Login}
        options={{ headerShown: null }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{ headerShown: null }}
      />
    </Navigator>
  )
}