import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {
  AuthLoginScreen,
  AuthForgotPasswordScreen,
  AuthRegisterScreen
} from '../../screens';
const screens = [
  {
    name: 'AuthLoginScreen',
    component: AuthLoginScreen,
  },
  {
    name: 'AuthForgotPasswordScreen',
    component: AuthForgotPasswordScreen,
  },
  {
    name: 'AuthRegisterScreen',
    component: AuthRegisterScreen,
  },
];

const AuthLoginStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      {screens.map(screen => (
        <Stack.Screen {...screen} />
      ))}
    </Stack.Navigator>
  );
};

export default AuthLoginStack;
