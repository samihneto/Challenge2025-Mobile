import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/app/Dashboard';
import Profile from '../screens/app/Profile';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppStack({ onLogout }: { onLogout: () => void }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const iconName = route.name === 'Dashboard' ? 'home' : 'account-circle';
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#22b85d',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      })}
    >
      <Tab.Screen name="Dashboard">
        {(props) => <Dashboard {...props} onLogout={onLogout} />}
      </Tab.Screen>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
