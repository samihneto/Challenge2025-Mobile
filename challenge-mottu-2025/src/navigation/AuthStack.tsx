import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/auth/Welcome';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Forgot from '../screens/auth/Forgot';
import NotFound from '../screens/NotFound';

const Stack = createNativeStackNavigator();

export default function AuthStack({ onLogin }: { onLogin: () => void }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login">
        {(props) => <Login {...props} onLogin={onLogin} />}
      </Stack.Screen>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="NotFound" component={NotFound} />
    </Stack.Navigator>
  );
}
