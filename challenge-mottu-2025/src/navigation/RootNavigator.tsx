import React, { useEffect, useState } from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const checkLogin = async () => {
    const user = await AsyncStorage.getItem('@user');
    setIsLoggedIn(!!user);
  };

  useEffect(() => {
    checkLogin();
  }, []);

  if (isLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#22b85d" />
      </View>
    );
  }

  return isLoggedIn ? (
    <AppStack
      onLogout={() => {
        setIsLoggedIn(false);
      }}
    />
  ) : (
    <AuthStack
      onLogin={() => {
        setIsLoggedIn(true);
      }}
    />
  );
}
