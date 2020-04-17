import * as React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import {
  UserMembersListScreen,
} from '../../screens';


const screens = [
  {
    name: "UserMembersListScreen",
    component: UserMembersListScreen,
  }
];

const UserMembersStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      {screens.map(screen => (
        <Stack.Screen {...screen} />
      ))}
    </Stack.Navigator>
  );
}

export default UserMembersStack;

