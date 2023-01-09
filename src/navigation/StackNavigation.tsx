import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FormPage from '../pages/form/FormPage';
import {HomeTab} from './TabNavigation';

const Stack = createNativeStackNavigator();

export function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={HomeTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Form" component={FormPage} />
    </Stack.Navigator>
  );
}
