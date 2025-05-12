import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <Button title="Cadastrar" onPress={() => console.log('Conta criada!')} />
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta?</Text>
        <Button title="Login" onPress={() => router.push('./Login')} />
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
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#7b8bb2',
  },
});
