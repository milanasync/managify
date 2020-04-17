import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import {UserDashScreen} from '../../screens';
import EventsStack from '../User/EventsStack';
import UserMembersStack from '../User/MembersStack';


// strings
import strings from '../../localizations';

// components
import { Button } from '../../components';

const screens = [
  {
    name: 'UserDashScreen',
    options: {
      title: strings.dashboard
    },
    component: UserDashScreen,
  },
  {
    name: 'EventsStack',
    options: {
      title: strings.events
    },
    component: EventsStack
  },
  {
    name:'UserMembersStack',
    options: {
      title: strings.members,
    },
    component: UserMembersStack
  }
];

const UserDashStack = () => {
  return (
    <Stack.Navigator>
      {screens.map(screen => (
        <Stack.Screen {...screen}/>
      ))}
    </Stack.Navigator>
  );
};

export default UserDashStack;
