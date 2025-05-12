import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App da Mottu</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Entrar"
          onPress={() => router.push('./Login')}
        />
        <Button
          title="Criar Conta"
          onPress={() => router.push('./Register')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 24,
  }
});
