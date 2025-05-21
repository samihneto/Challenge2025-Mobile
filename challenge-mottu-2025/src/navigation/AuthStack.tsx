import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import NotFound from '../screens/NotFound';
import Forgot from '../screens/auth/Forgot';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Welcome from '../screens/auth/Welcome';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="NotFound" component={NotFound} />
    </Stack.Navigator>
  );
}
