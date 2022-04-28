import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Drawer from './customDrawer';

import Home from '../src/screens/Home';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerTitle: null,
      }}
    >
      <Stack.Screen name="Root" component={Home} />

      <Stack.Screen name="CustomDrawer" component={Drawer} />
    </Stack.Navigator>
  );
}
