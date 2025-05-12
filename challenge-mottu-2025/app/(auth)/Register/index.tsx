import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput placeholder="E-mail" style={styles.input} placeholderTextColor="#ccc" />
      <TextInput placeholder="Senha" secureTextEntry style={styles.input} placeholderTextColor="#ccc" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => router.push('./Login')}>
          <Text style={styles.link}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111914',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#f7f7f7',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1d2a23',
    borderRadius: 8,
    paddingHorizontal: 16,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#22b85d',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: '#ccc',
    fontSize: 14,
  },
  link: {
    color: '#22b85d',
    fontSize: 14,
    marginTop: 5,
    textDecorationLine: 'underline',
  },
});
