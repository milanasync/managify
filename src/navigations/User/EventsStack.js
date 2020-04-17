import * as React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import {
  UserEventListScreen,
  UserEventViewScreen
} from '../../screens';

const screens = [
  {
    name: "UserEventListScreen",
    component: UserEventListScreen
  },
  {
    name: "UserEventViewScreen",
    component: UserEventViewScreen
  }
];

const UserEventsStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      {screens.map(screen => (
        <Stack.Screen {...screen} />
      ))}
    </Stack.Navigator>
  );
}

export default UserEventsStack;

