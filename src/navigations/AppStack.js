import * as React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import LoginStack from './Auth/LoginStack';
import UserDashStack from './User/DashStack';

const screens = [
  {
    name: "LoginStack",
    component: LoginStack
  },
  {
    name: "UserDashStack",
    component: UserDashStack
  }
];

const AppStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      {screens.map(screen => (
        <Stack.Screen {...screen} />
      ))}
    </Stack.Navigator>
  );
}

export default AppStack;

