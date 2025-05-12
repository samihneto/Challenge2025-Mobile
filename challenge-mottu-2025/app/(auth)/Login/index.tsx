import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Button title="Entrar" onPress={() => console.log('Usuário logado!')} />
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Não tem uma conta?</Text>
        <Button title="Criar Conta" onPress={() => router.push('./Register')} />
        <Text style={styles.forgotPassword} onPress={() => router.push('./Forgot')}>Esqueceu a senha?</Text>
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
  forgotPassword: {
    fontSize: 14,
    color: '#ED145B',
    marginTop: 10,
    textDecorationLine: 'underline',
  }
});
